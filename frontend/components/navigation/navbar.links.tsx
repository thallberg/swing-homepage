// components/navigation/desktop-nav.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  onMenuActiveChange?: (active: boolean) => void;
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

function DesktopNav({ links, onMenuActiveChange }: DesktopNavProps) {
  const bookingServices = serviceCardContent.map((service) => ({
    title: service.title,
    slug: titleToSlug(service.title),
  }));

  // Spåra när navigation menu är aktiv
  useEffect(() => {
    const checkMenuState = () => {
      const openTrigger = document.querySelector('[data-state="open"]');
      const isActive = !!openTrigger;
      onMenuActiveChange?.(isActive);
    };

    const observer = new MutationObserver(checkMenuState);
    const menuElement = document.querySelector('[data-slot="navigation-menu"]');
    
    if (menuElement) {
      observer.observe(menuElement, {
        attributes: true,
        attributeFilter: ['data-state'],
        subtree: true,
        childList: false,
      });
    }

    // Kontrollera initialt
    checkMenuState();

    return () => {
      observer.disconnect();
    };
  }, [onMenuActiveChange]);

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList 
        className="gap-10"
        onMouseEnter={() => onMenuActiveChange?.(true)}
        onMouseLeave={() => {
          setTimeout(() => {
            const openTrigger = document.querySelector('[data-state="open"]');
            if (!openTrigger) {
              onMenuActiveChange?.(false);
            }
          }, 150);
        }}
      >
        {links.map((link) => {
          if (link.href === "/booking" && link.hasSubmenu) {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-amber-200 hover:bg-transparent data-[state=open]:text-amber-200 data-[state=open]:bg-transparent data-[active]:bg-transparent data-[state=open]:underline data-[state=open]:decoration-2 data-[state=open]:underline-offset-4">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  onMouseEnter={() => onMenuActiveChange?.(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      onMenuActiveChange?.(false);
                    }, 150);
                  }}
                >
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
          if (link.href === "/about" && link.hasSubmenu) {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-amber-200 hover:bg-transparent data-[state=open]:text-amber-200 data-[state=open]:bg-transparent data-[active]:bg-transparent data-[state=open]:underline data-[state=open]:decoration-2 data-[state=open]:underline-offset-4">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  onMouseEnter={() => onMenuActiveChange?.(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      onMenuActiveChange?.(false);
                    }, 150);
                  }}
                >
                  <ul className="grid w-[400px] gap-3 p-4 bg-gray-800/99 text-white">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-amber-200 focus:bg-gray-700 focus:text-amber-200"
                        >
                          <div className="text-sm font-medium leading-none">
                            Företaget
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <Separator className="bg-gray-700" />
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/about/team"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-amber-200 focus:bg-gray-700 focus:text-amber-200"
                        >
                          <div className="text-sm font-medium leading-none">
                            Vårt Team
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem 
              key={link.href}
              onMouseEnter={() => onMenuActiveChange?.(true)}
              onMouseLeave={() => onMenuActiveChange?.(false)}
            >
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:text-amber-200 hover:bg-transparent"
                  )}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { DesktopNav };
