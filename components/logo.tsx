import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
        className
      )}
      aria-label="AL BAHTH home"
    >
      <Image
        src="/al-bahth-logo.jpeg"
        alt="AL BAHTH Electromechanical Equipment Installation & Maintenance"
        width={560}
        height={180}
        priority={priority}
        className="h-auto w-[180px] object-contain sm:w-[220px] lg:w-[260px]"
      />
    </Link>
  );
}
