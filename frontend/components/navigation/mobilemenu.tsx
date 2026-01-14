"use client";

import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { serviceCardContent } from "@/app/data/content/service-content/service.card.content";

type LinkItem = {
  href: string;
  label: string;
  hasSubmenu?: boolean;
};

type MobileMenuProps = {
  links: LinkItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

function MobileMenu({ links, open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();
  const bookingServices = serviceCardContent.map((service) => ({
    title: service.title,
    slug: titleToSlug(service.title),
  }));

  return (
    <div className="lg:hidden">
      <Drawer
        direction="right"
        modal={false}
        open={open}
        onOpenChange={onOpenChange}
      >
        <DrawerTrigger asChild>
          <Button aria-label="Open menu" variant="ghost" size="icon" className="hover:bg-transparent dark:hover:bg-transparent">
            <Menu className="size-6 text-white" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="ml-auto mt-16 h-[calc(100dvh-4rem)] bg-gray-800/99 text-white border-none rounded-none p-6 w-screen">
          <VisuallyHidden>
            <DrawerTitle>Huvudmeny</DrawerTitle>
          </VisuallyHidden>
          <nav className="flex flex-col gap-6 items-center">
            {pathname !== "/" && (
              <DrawerClose asChild>
                <Link href="/" className="text-lg">Hem</Link>
              </DrawerClose>
            )}

            {links.map((link) => {
              if (link.href === "/booking" && link.hasSubmenu) {
                return (
                  <DropdownMenu key={link.href}>
                    <DropdownMenuTrigger className="text-lg text-white flex items-center gap-2 outline-none">
                      {link.label}
                      <ChevronRight className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800/99 text-white border-gray-700 w-56">
                      <DropdownMenuItem asChild>
                        <DrawerClose asChild>
                          <Link href="/booking" className="cursor-pointer w-full">
                            Alla bokningar
                          </Link>
                        </DrawerClose>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-700" />
                      {bookingServices.map((service) => (
                        <DropdownMenuItem key={service.slug} asChild>
                          <DrawerClose asChild>
                            <Link
                              href={`/booking/${service.slug}`}
                              className="cursor-pointer w-full"
                            >
                              {service.title}
                            </Link>
                          </DrawerClose>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <DrawerClose asChild key={link.href}>
                  <Link href={link.href} className="text-lg">{link.label}</Link>
                </DrawerClose>
              );
            })}
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export { MobileMenu };
