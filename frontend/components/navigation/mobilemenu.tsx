"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type LinkItem = {
  href: string;
  label: string;
};

function MobileMenu({ links }: { links: LinkItem[] }) {
  return (
    <div className="lg:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6 text-white" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          animation={"slideRight"}
          align="start"
          side="bottom"
          sideOffset={14}
          className="
  w-[60vw]
  h-[95vh]
  p-6
  bg-amber-700
  text-white
  border-none
  rounded-none
"
        >
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { MobileMenu };
