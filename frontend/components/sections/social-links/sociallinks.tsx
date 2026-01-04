"use client";

import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import Link from "next/link";

export type SocialLinkItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  hoverClass: string;
};
const socialLinks: SocialLinkItem[] = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: Facebook,
    hoverClass: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: Instagram,
    hoverClass: "hover:text-orange-400",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    hoverClass: "hover:text-blue-400",
  },
];

function SocialLinks() {
  return (
    <section className="space-y-3">
      <div className="flex justify-center gap-6 md:justify-start">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              aria-label={item.label}
              className={`text-amber-100 transition ${item.hoverClass}`}
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
