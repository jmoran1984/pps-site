"use server";

import { Resend } from "resend";

export type RequestServiceState = {
  success: boolean;
  message: string;
  delivered?: boolean;
};

const initialError: RequestServiceState = {
  success: false,
  message: "Something went wrong. Please try again.",
};

function getRequiredString(formData: FormData, field: string) {
  const value = formData.get(field);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export async function submitServiceRequest(
  _previousState: RequestServiceState,
  formData: FormData,
): Promise<RequestServiceState> {
  const name = getRequiredString(formData, "name");
  const phone = getRequiredString(formData, "phone");
  const email = getRequiredString(formData, "email");
  const service = getRequiredString(formData, "service");
  const address = getRequiredString(formData, "address");
  const message = getRequiredString(formData, "message");

  // Honeypot field for basic bot protection.
  const website = getRequiredString(formData, "website");

  if (website) {
    return {
      success: true,
      message: "Your request has been received.",
      delivered: false,
    };
  }

  if (!name || !phone || !service || !message) {
    return {
      success: false,
      message: "Please complete all required fields.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.SERVICE_REQUEST_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipientEmail || !fromEmail) {
    console.error("Missing Resend environment variables.");
    return initialError;
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New plumbing request: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="color: #123B63;">New Service Request</h1>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${
            email ? escapeHtml(email) : "Not provided"
          }</p>
          <p><strong>Requested service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Property address:</strong> ${
            address ? escapeHtml(address) : "Not provided"
          }</p>

          <h2 style="color: #123B63;">Customer message</h2>

          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return initialError;
    }

    return {
      success: true,
      message:
        "Thanks! Your request has been sent. We’ll contact you as soon as possible.",
      delivered: true,
    };
  } catch (error) {
    console.error("Service request submission failed:", error);
    return initialError;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
