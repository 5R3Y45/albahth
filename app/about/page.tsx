import { CheckCircle2 } from "lucide-react";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

const values = ["Integrity", "Safety", "Reliability", "Excellence", "Customer Focus"];
const timeline = [
  { year: "2023", title: "Company Established" },
  { year: "2024", title: "Service Expansion" },
  { year: "2025", title: "Growing Client Network" }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About AL BAHTH"
        description="A Dubai-based electromechanical company focused on dependable installation, maintenance, and technical service support."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Company Overview"
            title="Built for professional technical service delivery."
          />
          <div className="space-y-5 text-lg leading-8 text-brand-muted">
            <p>
              AL BAHTH Electromechanical Equipment Installation & Maintenance
              LLC provides structured electromechanical services for clients who
              require accountable workmanship, clear communication, and safe site
              execution.
            </p>
            <p>
              Our team supports commercial, industrial, and residential assets
              with electrical, mechanical, HVAC, facility maintenance, and
              project-based electromechanical contracting services across Dubai
              and the wider UAE.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="corporate-card p-7">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-2xl font-bold text-brand-ink">
              Dependable engineering and maintenance solutions.
            </h2>
            <p className="mt-4 leading-8 text-brand-muted">
              To deliver dependable engineering and maintenance solutions that
              support the operational success of our clients.
            </p>
          </div>
          <div className="corporate-card p-7">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-3 text-2xl font-bold text-brand-ink">
              Trusted service provider in the UAE.
            </h2>
            <p className="mt-4 leading-8 text-brand-muted">
              To become one of the UAE&apos;s most trusted electromechanical
              service providers through quality, reliability, and
              professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Core Values" title="Principles that guide our work." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3 rounded border border-brand-line p-4">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                  <span className="font-semibold text-brand-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Timeline" title="Focused growth and service readiness." />
            <div className="mt-8 space-y-5">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-5 border-l-4 border-brand-blue bg-brand-gray p-5">
                  <div className="text-2xl font-bold text-brand-gold">{item.year}</div>
                  <div className="font-semibold text-brand-ink">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
