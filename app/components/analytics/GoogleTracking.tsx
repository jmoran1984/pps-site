"use client";

import { useEffect } from "react";
import Script from "next/script";
import { site } from "@/lib/config/site";

// These values are public tracking IDs, not API secrets. Configure them in Vercel.
// Each Ads label must belong to its OWN conversion action: do not reuse
// a "Calls from ads" label for website call clicks or form submissions.
const rawAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
const rawGaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "";
const rawClickLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CLICK_LABEL ?? "";
const rawFormLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL ?? "";
const rawWebsiteCallLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WEBSITE_CALL_LABEL ?? "";

const adsId = /^AW-\d+$/.test(rawAdsId) ? rawAdsId : "";
const gaId = /^G-[A-Z0-9]+$/.test(rawGaId) ? rawGaId : "";
const validLabel = (label: string) => /^[A-Za-z0-9_-]+$/.test(label) ? label : "";
const clickLabel = validLabel(rawClickLabel);
const formLabel = validLabel(rawFormLabel);
const websiteCallLabel = validLabel(rawWebsiteCallLabel);
const tagId = adsId || gaId;

// Google's forwarding callback provides both the number for display and the
// dialable number. This is necessary because changing only the text leaves
// mobile tel: links dialing the original number.
const forwardingCallbackSetup = `
(function () {
  var businessNumber = ${JSON.stringify(site.phone)};
  var businessDigits = ${JSON.stringify(site.phone.replace(/\\D/g, ""))};
  var state = null;
  var observer = null;
  var scheduled = false;

  function updatePhoneText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.includes(businessNumber)) {
        node.nodeValue = node.nodeValue.split(businessNumber).join(state.formatted);
      }
    }
    if (root instanceof Element) {
      var label = root.getAttribute("aria-label");
      if (label && label.includes(businessNumber)) {
        root.setAttribute("aria-label", label.split(businessNumber).join(state.formatted));
      }
    }
  }

  function syncPhoneLinks() {
    if (!state) return;
    // Account for newly rendered buttons on client-side page transitions.
    document.querySelectorAll('a[href^="tel:"], a[data-pps-forwarded-call]').forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var digits = href.replace(/\\D/g, "");
      if (digits !== businessDigits && digits !== "1" + businessDigits && !link.hasAttribute("data-pps-forwarded-call")) {
        return;
      }

      var nextHref = "tel:" + state.mobile;
      if (href !== nextHref) link.setAttribute("href", nextHref);
      if (!link.hasAttribute("data-pps-forwarded-call")) {
        link.setAttribute("data-pps-forwarded-call", "");
      }
      updatePhoneText(link);
    });

    document.querySelectorAll("[data-pps-phone-display]").forEach(updatePhoneText);
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      syncPhoneLinks();
    });
  }

  function watchForNavigation() {
    if (observer || !document.body) return;
    observer = new MutationObserver(scheduleSync);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["href"]
    });
  }

  window.__ppsPhoneConversionCallback = function (formatted, mobile) {
    if (typeof formatted !== "string" ||
        typeof mobile !== "string" ||
        !/^\\+?\\d{10,15}$/.test(mobile)) return;
    state = { formatted: formatted, mobile: mobile };
    watchForNavigation();
    syncPhoneLinks();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (state) {
        watchForNavigation();
        syncPhoneLinks();
      }
    }, { once: true });
  }
})();
`;


type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

function trackEvent(name: string, params: Record<string, string>) {
  const trackedWindow = window as TrackingWindow;
  trackedWindow.dataLayer ??= [];
  trackedWindow.dataLayer.push({ event: name, ...params });
  trackedWindow.gtag?.("event", name, params);
}

function trackAdsConversion(label: string) {
  if (!adsId || !label) return;
  (window as TrackingWindow).gtag?.("event", "conversion", {
    send_to: `${adsId}/${label}`,
  });
}

function WebsiteEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!link) return;

      trackEvent("pps_phone_click", {
        page_path: window.location.pathname,
        link_location: "website",
      });
      // A click is NOT a verified telephone call. Keep this conversion
      // action Secondary/observation-only in Google Ads.
      trackAdsConversion(clickLabel);
    };

    const onSuccessfulRequest = () => {
      trackEvent("generate_lead", {
        page_path: window.location.pathname,
        method: "service_request_form",
      });
      trackAdsConversion(formLabel);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("pps:service-request-success", onSuccessfulRequest);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("pps:service-request-success", onSuccessfulRequest);
    };
  }, []);

  return null;
}

export default function GoogleTracking() {
  // Load one shared Google tag for Google Ads and, later, Google Analytics 4.
  // Without configured IDs, no Google script is loaded.
  const setup = [
    "window.dataLayer = window.dataLayer || [];",
    "window.gtag = function(){window.dataLayer.push(arguments);};",
    "gtag('js', new Date());",
    adsId ? `gtag('config', ${JSON.stringify(adsId)});` : "",
    gaId ? `gtag('config', ${JSON.stringify(gaId)});` : "",
    adsId && websiteCallLabel ? forwardingCallbackSetup : "",
    adsId && websiteCallLabel
      ? `gtag('config', ${JSON.stringify(`${adsId}/${websiteCallLabel}`)}, { phone_conversion_number: ${JSON.stringify(site.phone)}, phone_conversion_callback: window.__ppsPhoneConversionCallback });`
      : "",
  ].filter(Boolean).join("\n");

  return (
    <>
      {tagId && (
        <>
          <Script
            id="pps-google-tag-source"
            src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`}
            strategy="afterInteractive"
          />
          <Script
            id="pps-google-tag-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: setup }}
          />
        </>
      )}
      <WebsiteEvents />
    </>
  );
}
