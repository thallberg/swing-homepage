"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint } from "lucide-react";
import { MobileMenu } from "../navigation/mobilemenu";
import { DesktopNav } from "../navigation/navbar.links";

const navLinks = [
  { href: "/booking", label: "Boka" },
  { href: "/about", label: "Om oss" },
  { href: "/contact", label: "Kontakta" },
  { href: "/gallery", label: "Galleri" },
];

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const title = pathname === "/" ? "Swings Islandshästar" : "Hem";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-gray-800/99 shadow-md py-0" : "bg-transparent py-2"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <PawPrint className="size-8 text-white" />
          <Link href="/" className="ml-2 text-white">
            {title}
          </Link>
        </div>

        {/* Desktop nav */}
        <DesktopNav links={navLinks} />

        {/* Mobile */}
        <MobileMenu links={navLinks} />
      </div>
    </nav>
  );
}

export { Navbar };
