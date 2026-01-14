// components/navigation/desktop-nav.tsx
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { serviceCardContent } from "@/app/data/content/service-content/service.card.content";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
  const bookingServices = serviceCardContent.map((service) => ({
    title: service.title,
    slug: titleToSlug(service.title),
  }));

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-10">
        {links.map((link) => {
          if (link.href === "/booking" && link.hasSubmenu) {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-amber-200 hover:bg-transparent data-[state=open]:text-amber-200 data-[state=open]:bg-transparent data-[active]:bg-transparent data-[state=open]:underline data-[state=open]:decoration-2 data-[state=open]:underline-offset-4">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-gray-800/99 text-white">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/booking"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-amber-200 focus:bg-gray-700 focus:text-amber-200"
                        >
                          <div className="text-sm font-medium leading-none">
                            Alla bokningar
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <Separator className="bg-gray-700" />
                    {bookingServices.map((service) => (
                      <li key={service.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/booking/${service.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-amber-200 focus:bg-gray-700 focus:text-amber-200"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:text-amber-200 hover:bg-transparent"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { DesktopNav };
