import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  image: string;
  className?: string;
};

export function PageHero({
  title,
  eyebrow = "AL BAHTH",
  description,
  image,
  className
}: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[320px] overflow-hidden", className)}>
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brand-navy/75" />
      <div className="container relative flex min-h-[320px] items-center py-16">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
