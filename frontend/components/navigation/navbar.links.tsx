// components/navigation/desktop-nav.tsx
"use client";

import Link from "next/link";

export type NavLink = {
  href: string;
  label: string;
};

type DesktopNavProps = {
  links: NavLink[];
};

function DesktopNav({ links }: DesktopNavProps) {
  return (
    <ul className="hidden gap-6 lg:flex">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-white transition-colors hover:text-amber-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { DesktopNav };
