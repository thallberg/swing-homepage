"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

type LinkItem = {
  href: string;
  label: string;
};

function MobileMenu({ links }: { links: LinkItem[] }) {
  const pathname = usePathname();
  return (
    <div className="lg:hidden">
      <Drawer direction="right" modal={false}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6 text-white" />
          </Button>
        </DrawerTrigger>

        <DrawerContent className="ml-auto mt-16 h-[calc(100dvh-4rem)] bg-gray-800/99 text-white border-none rounded-none p-6">
          <VisuallyHidden>
            <DrawerTitle>Huvudmeny</DrawerTitle>
          </VisuallyHidden>
          <nav className="flex flex-col gap-6 items-center">
            {pathname !== "/" && (
              <DrawerClose asChild>
                <Link href="/">Hem</Link>
              </DrawerClose>
            )}

            {links.map((link) => (
              <DrawerClose asChild key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </DrawerClose>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export { MobileMenu };
