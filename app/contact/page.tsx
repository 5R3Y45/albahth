import { MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { company, contactCards } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Connect with AL BAHTH for project enquiries, maintenance support, supplier coordination, and company verification requests."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Enquiry Form"
              title="Send your project or service requirement."
              description="Our team will review your enquiry and respond with the appropriate technical or administrative support."
            />
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className="corporate-card p-6">
              <h2 className="text-2xl font-bold text-brand-ink">
                Company Information
              </h2>
              <div className="mt-5 space-y-4 text-brand-muted">
                <div>
                  <p className="font-semibold text-brand-ink">Address</p>
                  <p className="mt-2 leading-7">{company.address.join(", ")}</p>
                </div>
                {contactCards.slice(0, 3).map((card) => {
                  const Icon = card.icon;
                  return (
                    <div key={card.label} className="flex gap-3">
                      <Icon className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />
                      <div>
                        <p className="font-semibold text-brand-ink">{card.label}</p>
                        <p>{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-md border border-brand-line bg-brand-gray">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#d8dee6_1px,transparent_1px),linear-gradient(#d8dee6_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="absolute inset-0 bg-white/70" />
              <div className="relative flex min-h-[320px] flex-col items-center justify-center p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded bg-brand-blue text-white">
                  <MapPin className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-brand-ink">
                  Map Location Placeholder
                </h2>
                <p className="mt-3 max-w-sm leading-7 text-brand-muted">
                  Al Qusais, Muhaisnah 4, Gala Building, 3rd Floor, Dubai,
                  United Arab Emirates
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
