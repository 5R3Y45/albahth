import Image from "next/image";
import { readFileSync, readdirSync } from "node:fs";
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
  width?: number;
  height?: number;
};

type ImageDimensions = {
  width: number;
  height: number;
};

function getPublicImages(folder: "clients"): MediaAsset[] {
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

function readUInt24LE(buffer: Buffer, offset: number) {
  return buffer[offset] + (buffer[offset + 1] << 8) + (buffer[offset + 2] << 16);
}

function getWebpDimensions(filePath: string): ImageDimensions {
  const buffer = readFileSync(filePath);

  if (buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") {
    return { width: 1200, height: 800 };
  }

  let offset = 12;

  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (chunkType === "VP8X") {
      return {
        width: readUInt24LE(buffer, dataOffset + 4) + 1,
        height: readUInt24LE(buffer, dataOffset + 7) + 1
      };
    }

    if (chunkType === "VP8L") {
      const b1 = buffer[dataOffset + 1];
      const b2 = buffer[dataOffset + 2];
      const b3 = buffer[dataOffset + 3];
      const b4 = buffer[dataOffset + 4];

      return {
        width: 1 + (((b2 & 0x3f) << 8) | b1),
        height: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6))
      };
    }

    if (chunkType === "VP8 ") {
      return {
        width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff
      };
    }

    offset = dataOffset + chunkSize + (chunkSize % 2);
  }

  return { width: 1200, height: 800 };
}

async function getWorkImages(): Promise<Required<MediaAsset>[]> {
  const folder = "workpics";
  const directory = join(process.cwd(), "public", folder);

  const files = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(parse(name).ext.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return files.map((name) => {
    const dimensions = getWebpDimensions(join(directory, name));

    return {
      name,
      src: `/${folder}/${name}`,
      width: dimensions.width,
      height: dimensions.height
    };
  });
}

export default async function ProjectsPage() {
  const projectImages = await getWorkImages();
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
          <div className="mt-10 columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
            {projectImages.map((project) => (
              <article
                key={project.name}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-md border border-brand-line bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-corporate"
              >
                <Image
                  src={project.src}
                  alt="AL BAHTH completed project work"
                  width={project.width}
                  height={project.height}
                  sizes="(min-width: 1536px) 25vw, (min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded object-contain"
                />
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
