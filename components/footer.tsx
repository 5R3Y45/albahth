import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-gray">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.5fr_0.8fr_1fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted">
            {company.description} Built on quality workmanship, safety, and
            reliable service delivery.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-brand-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-brand-muted">
            {services.slice(0, 5).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-navy">
            Contact Information
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-brand-muted">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-gold" />
              <span>{company.address.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 flex-none text-brand-gold" />
              <span>{company.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 flex-none text-brand-gold" />
              <span>{company.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-line bg-white">
        <div className="container flex flex-col gap-2 py-5 text-sm text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {company.shortName}. All rights
            reserved.
          </p>
          <p>Electromechanical Equipment Installation & Maintenance LLC</p>
        </div>
      </div>
      <div className="border-t border-brand-line bg-brand-ink py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white">
        <Link
          href="https://sreyas.tech"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-brand-gold"
        >
          designed by C⊛RELYNK
        </Link>
      </div>
    </footer>
  );
}
