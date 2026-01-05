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

type LinkItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  links: LinkItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MobileMenu({ links, open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();
  return (
    <div className="lg:hidden">
      <Drawer
        direction="right"
        modal={false}
        open={open}
        onOpenChange={onOpenChange}
      >
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="hover:bg-transparent dark:hover:bg-transparent">
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
