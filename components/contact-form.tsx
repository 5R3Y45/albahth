"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormValues = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
};

const recipient = "hr@albahth.in";

const initialValues: FormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  message: ""
};

function buildEmailBody(values: FormValues) {
  return [
    "New enquiry submitted from the AL BAHTH website.",
    "",
    `Full Name: ${values.fullName}`,
    `Company Name: ${values.companyName || "Not provided"}`,
    `Email Address: ${values.email}`,
    `Phone Number: ${values.phone}`,
    "",
    "Message:",
    values.message
  ].join("\n");
}

function encodeMailtoValue(value: string) {
  return encodeURIComponent(value).replace(/%0A/g, "%0D%0A");
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState("");

  const subject = useMemo(
    () =>
      `Website enquiry from ${values.fullName || "AL BAHTH website visitor"}`,
    [values.fullName]
  );

  const emailBody = useMemo(() => buildEmailBody(values), [values]);

  const mailtoHref = useMemo(() => {
    return `mailto:${recipient}?subject=${encodeMailtoValue(subject)}&body=${encodeMailtoValue(emailBody)}`;
  }, [emailBody, subject]);

  const gmailHref = useMemo(() => {
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: recipient,
      su: subject,
      body: emailBody
    });

    return `https://mail.google.com/mail/?${params.toString()}`;
  }, [emailBody, subject]);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Your email app has been opened with the enquiry details. Please review and send the message."
    );
    window.location.href = mailtoHref;
  }

  return (
    <form className="mt-8 grid gap-5" aria-label="Contact form" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Full Name
        <input
          required
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={(event) => updateValue("fullName", event.target.value)}
          placeholder="Enter your full name"
          className="min-h-12 rounded border border-brand-line px-4 text-base font-normal outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Company Name
        <input
          name="companyName"
          type="text"
          value={values.companyName}
          onChange={(event) => updateValue("companyName", event.target.value)}
          placeholder="Enter your company name"
          className="min-h-12 rounded border border-brand-line px-4 text-base font-normal outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Email Address
        <input
          required
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          placeholder="Enter your email address"
          className="min-h-12 rounded border border-brand-line px-4 text-base font-normal outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Phone Number
        <input
          required
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(event) => updateValue("phone", event.target.value)}
          placeholder="Enter your phone number"
          className="min-h-12 rounded border border-brand-line px-4 text-base font-normal outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-brand-ink">
        Message
        <textarea
          required
          name="message"
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          placeholder="Describe your requirement"
          rows={6}
          className="rounded border border-brand-line px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" className="w-full sm:w-fit">
          <Mail className="h-4 w-4" />
          Submit Enquiry
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-fit">
          <a href={gmailHref} target="_blank" rel="noreferrer">
            <ExternalLink className="h-4 w-4" />
            Open in Gmail
          </a>
        </Button>
      </div>
      {status ? (
        <p className="rounded border border-brand-line bg-brand-gray px-4 py-3 text-sm leading-6 text-brand-muted">
          {status}
        </p>
      ) : null}
    </form>
  );
}
