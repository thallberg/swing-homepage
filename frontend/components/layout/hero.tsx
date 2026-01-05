"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroItem } from "../../app/data/content/hero-content/hero.content";
import * as React from "react";

type HeroProps = {
  item: HeroItem;
  className?: string;
  showIcon?: boolean;
};

function Hero({ item, className, showIcon = true }: HeroProps) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY <= 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "relative h-screen w-full overflow-hidden",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold text-amber-100 md:text-6xl">
          {item.title}
        </h1>

        <p className="max-w-2xl text-xl text-amber-100 md:text-2xl">
          {item.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      {showIcon && visible && (
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <ChevronDown className="size-14 text-amber-50" />
        </div>
      )}
    </header>
  );
}

export { Hero };
