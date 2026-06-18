import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-brand-navy py-14 text-white sm:py-16">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Project Support</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Need Reliable Electromechanical Services?
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/82">
            Contact our team today to discuss your project requirements.
          </p>
        </div>
        <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
          <Link href="/contact">
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
