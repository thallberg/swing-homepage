"use client";

import { socialLinks } from "@/app/data/content/sociallinks-content/sociallinks.data";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type SocialLinkItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  hoverClass: string;
};


function SocialLinks() {
  return (
    <section className="space-y-3">
      <div className="flex justify-center gap-6 md:justify-start">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn("text-amber-100 transition", item.hoverClass)}
            >
              <Icon className="size-6" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export { SocialLinks };