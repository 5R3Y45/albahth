import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Fan,
  Gauge,
  HardHat,
  Home,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Store,
  Wrench,
  Zap
} from "lucide-react";

export const company = {
  name: "AL BAHTH Electromechanical Equipment Installation & Maintenance LLC",
  shortName: "AL BAHTH",
  description:
    "Dubai-based electromechanical installation, maintenance, and technical support services for commercial, industrial, and residential projects.",
  address: ["Qusais", "Coastal Building Office no.309", "Al Tawar", "Dubai", "United Arab Emirates" , "P.O. Box: 76721"],
  phone: "045707390",
  email: "hr@albahth.in",
  whatsapp: "+971 XX XXX XXXX"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects & Clients" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Electrical Installation",
    description:
      "Professional electrical installation services for commercial, industrial, and residential facilities.",
    detail:
      "AL BAHTH delivers structured electrical installation works with careful planning, compliant execution, and dependable site coordination.",
    icon: Zap,
    benefits: ["Load distribution and panel works", "Cabling, containment, and termination", "Testing support and handover readiness"]
  },
  {
    title: "Electrical Maintenance",
    description:
      "Preventive and corrective maintenance services that improve system reliability and safety.",
    detail:
      "Our maintenance approach helps clients reduce downtime, correct electrical faults, and keep essential building systems operating safely.",
    icon: ClipboardCheck,
    benefits: ["Preventive inspection schedules", "Fault identification and rectification", "Safety-focused maintenance reporting"]
  },
  {
    title: "HVAC Installation & Maintenance",
    description:
      "Installation, servicing, and maintenance of air conditioning and ventilation systems.",
    detail:
      "We support air conditioning and ventilation systems with practical installation, routine servicing, and responsive maintenance.",
    icon: Fan,
    benefits: ["AC installation and servicing", "Ventilation system support", "Performance checks and cleaning"]
  },
  {
    title: "Mechanical Works",
    description: "Mechanical installation, repair, and maintenance solutions.",
    detail:
      "Our mechanical works cover installation support, repair coordination, and scheduled maintenance for operating facilities.",
    icon: Settings,
    benefits: ["Mechanical equipment support", "Repair and replacement works", "Site-based technical assistance"]
  },
  {
    title: "Facility Maintenance",
    description:
      "Routine and specialized maintenance services for uninterrupted operations.",
    detail:
      "We help property owners and facility teams maintain operational continuity through organized, reliable technical maintenance.",
    icon: Wrench,
    benefits: ["Routine maintenance visits", "Multi-discipline technical support", "Issue tracking and follow-up"]
  },
  {
    title: "Electromechanical Contracting",
    description:
      "Comprehensive project execution for electromechanical systems.",
    detail:
      "AL BAHTH coordinates electromechanical scopes with a focus on workmanship, safety, documentation, and practical delivery.",
    icon: HardHat,
    benefits: ["Project planning and execution", "Site coordination", "Quality and safety controls"]
  }
];

export const whyChoose = [
  { title: "Quality Workmanship", icon: CheckCircle2 },
  { title: "Safety Compliance", icon: ShieldCheck },
  { title: "Reliable Service", icon: Gauge },
  { title: "Customer Satisfaction", icon: Landmark }
];

export const industries = [
  { title: "Commercial Buildings", icon: Building2 },
  { title: "Industrial Facilities", icon: Factory },
  { title: "Residential Communities", icon: Home },
  { title: "Retail Establishments", icon: Store },
  { title: "Hospitality Sector", icon: Hotel },
  { title: "Corporate Offices", icon: Building2 }
];

export const projects = [
  {
    title: "Commercial Building Maintenance",
    category: "Commercial Projects",
    description:
      "Placeholder project profile for electrical and facility maintenance works in a commercial property.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Industrial Facility Support",
    category: "Industrial Projects",
    description:
      "Placeholder project profile for electromechanical service support in an industrial operating environment.",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Residential Community Services",
    category: "Residential Projects",
    description:
      "Placeholder project profile for HVAC, electrical, and routine maintenance support for residential assets.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  }
];

export const contactCards = [
  { label: "Phone", value: company.phone, icon: Phone },
  { label: "Email", value: company.email, icon: Mail },
  { label: "WhatsApp", value: company.whatsapp, icon: Phone },
  { label: "Location", value: "Dubai, United Arab Emirates", icon: MapPin }
];
