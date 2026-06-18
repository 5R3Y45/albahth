import { CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Electromechanical Services"
        description="Professional electrical, mechanical, HVAC, facility maintenance, and contracting support for UAE projects and operating facilities."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Service Capability"
            title="Reliable technical execution with clear site discipline."
            description="AL BAHTH supports clients with practical engineering services designed for safety, continuity, and dependable handover."
            align="center"
          />
          <div className="mt-12 space-y-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="grid gap-6 rounded-md border border-brand-line bg-white p-6 shadow-sm lg:grid-cols-[0.7fr_1.3fr]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded bg-brand-blue text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-gold">
                        Service {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 text-2xl font-bold text-brand-ink">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div>
                    <p className="leading-8 text-brand-muted">{service.detail}</p>
                    <h3 className="mt-5 font-bold text-brand-ink">Key Benefits</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-3 text-sm leading-6 text-brand-muted">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
