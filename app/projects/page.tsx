import Image from "next/image";
import { readdirSync } from "node:fs";
import { join, parse } from "node:path";
import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title:
    "Projects & Clients | AL BAHTH Electromechanical Equipment Installation & Maintenance LLC",
  description:
    "Selected projects and client collaborations for AL BAHTH Electromechanical Equipment Installation & Maintenance LLC in Dubai, UAE."
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

type MediaAsset = {
  name: string;
  src: string;
};

function getPublicImages(folder: "projects" | "clients"): MediaAsset[] {
  const directory = join(process.cwd(), "public", folder);

  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(parse(name).ext.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((name) => ({
      name,
      src: `/${folder}/${name}`
    }));
}

function getProjectCategory(filename: string) {
  const baseName = parse(filename).name;
  const category = baseName.includes("-") ? baseName.split("-")[0] : baseName;

  return category
    .trim()
    .replace(/[\s_-]*\d+$/u, "")
    .trim();
}

export default function ProjectsPage() {
  const projectImages = getPublicImages("projects");
  const clientLogos = getPublicImages("clients");

  return (
    <>
      <PageHero
        title="Projects & Clients"
        description="Selected works and client collaborations that reflect AL BAHTH's electromechanical service capability across the UAE."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Our Projects"
            description="A showcase of selected projects and works completed by AL BAHTH Electromechanical Equipment Installation & Maintenance LLC."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projectImages.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-md border border-brand-line bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-corporate"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray">
                  <Image
                    src={project.src}
                    alt="AL BAHTH project work"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-flex min-h-7 items-center rounded-full bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {getProjectCategory(project.name)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-brand-gray">
        <div className="container">
          <SectionHeading
            eyebrow="Client Network"
            title="Companies We Work With"
            description="We are proud to collaborate with established organizations across the UAE's engineering, construction, and electromechanical sectors."
            align="center"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex min-h-[150px] items-center justify-center rounded-md border border-brand-line bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-corporate"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={client.src}
                    alt="Client company logo"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
