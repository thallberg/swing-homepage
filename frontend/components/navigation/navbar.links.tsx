// components/navigation/desktop-nav.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { serviceCardContent } from "@/app/data/content/service-content/service.card.content";

export type NavLink = {
  href: string;
  label: string;
  hasSubmenu?: boolean;
};

type DesktopNavProps = {
  links: NavLink[];
};

// Funktion för att konvertera title till slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function DesktopNav({ links }: DesktopNavProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bookingServices = serviceCardContent.map((service) => ({
    title: service.title,
    slug: titleToSlug(service.title),
  }));

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150); // Liten delay för att förhindra att menyn stängs för snabbt
  };

  return (
    <ul className="hidden gap-6 lg:flex items-center">
      {links.map((link) => {
        if (link.href === "/booking" && link.hasSubmenu) {
          return (
            <li 
              key={link.href}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                <DropdownMenuTrigger 
                  asChild
                  className="text-white transition-colors hover:text-amber-200 outline-none"
                >
                  <button className="text-white transition-colors hover:text-amber-200">
                    {link.label}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-gray-800/99 text-white border-gray-700"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  sideOffset={2}
                >
                  <DropdownMenuItem asChild>
                    <Link href="/booking" className="cursor-pointer">
                      Alla bokningar
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  {bookingServices.map((service) => (
                    <DropdownMenuItem key={service.slug} asChild>
                      <Link
                        href={`/booking/${service.slug}`}
                        className="cursor-pointer"
                      >
                        {service.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          );
        }
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white transition-colors hover:text-amber-200"
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export { DesktopNav };
