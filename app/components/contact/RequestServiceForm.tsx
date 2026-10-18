"use client";

import { useActionState, useEffect, useRef } from "react";

import Container from "../ui/Container";

import {
  submitServiceRequest,
  type RequestServiceState,
} from "@/app/actions/request-service";
import { site } from "@/lib/config/site";

const initialState: RequestServiceState = {
  success: false,
  message: "",
};

export default function RequestServiceForm() {
  const [state, formAction, pending] = useActionState(
    submitServiceRequest,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
    if (state.success && state.delivered) {
      window.dispatchEvent(new Event("pps:service-request-success"));
    }
  }, [state.success, state.delivered]);

  return (
    <section id="request-service" className="scroll-mt-24 bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              Request Service
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#123B63] sm:text-4xl">
              Tell Us About Your Project
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Complete the form below and we&apos;ll contact you as soon as
              possible to discuss your plumbing needs.
            </p>
          </div>

          <form ref={formRef} action={formAction} className="mt-16 space-y-8">
            <div
              className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Name *
                </label>

                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-medium">
                  Phone *
                </label>

                <input
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block font-medium">
                  Requested Service *
                </label>

                <select
                  required
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {site.services.map((service) => (
                    <option key={service.slug} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="address" className="mb-2 block font-medium">
                Property Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium">
                How can we help? *
              </label>

              <textarea
                required
                id="message"
                name="message"
                rows={6}
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20"
                placeholder="Tell us about your plumbing issue..."
              />
            </div>

            {state.message && (
              <div
                role={state.success ? "status" : "alert"}
                className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                  state.success
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {state.message}
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#005A9C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#004A81] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Sending Request..." : "Request Service"}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
