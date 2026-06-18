import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { industries, services, whyChoose } from "@/lib/site-data";

const heroImage =
  "/hero.jpg";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden">
        <Image
          src={heroImage}
          alt="Engineering and maintenance team working on technical equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/78" />
        <div className="container relative flex min-h-[680px] items-center py-20">
          <div className="max-w-4xl">
            <p className="eyebrow">Dubai, United Arab Emirates</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Trusted Electromechanical Installation & Maintenance Services in
              Dubai
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/86 sm:text-xl">
              Delivering reliable electrical, mechanical, HVAC, and facility
              maintenance solutions for commercial, industrial, and residential
              projects across the UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact">
                  Get In Touch <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="About AL BAHTH"
            title="Professional electromechanical services with a clear commitment to reliability."
          />
          <div className="border-l-4 border-brand-gold bg-brand-gray p-6 sm:p-8">
            <p className="text-lg leading-8 text-brand-muted">
              AL BAHTH Electromechanical Equipment Installation & Maintenance
              LLC is a Dubai-based company providing professional
              electromechanical installation, maintenance, and technical support
              services. We are committed to delivering quality workmanship,
              safety, reliability, and customer satisfaction across every
              project we undertake.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Electromechanical solutions for operating facilities and active projects."
            description="Our service structure supports procurement teams, facility managers, consultants, and project stakeholders with dependable technical execution."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="corporate-card p-6">
                  <Icon className="h-10 w-10 text-brand-blue" />
                  <h3 className="mt-5 text-xl font-bold text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-brand-muted">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A practical partner for technical service delivery."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="corporate-card p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded bg-brand-blue text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-ink">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray">
        <div className="container">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Supporting diverse assets across the UAE."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="flex items-center gap-4 rounded border border-brand-line bg-white p-5"
                >
                  <Icon className="h-7 w-7 flex-none text-brand-gold" />
                  <h3 className="font-semibold text-brand-ink">
                    {industry.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
