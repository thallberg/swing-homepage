"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ImageCardItem } from "../../../app/data/content/imagecard-content/image-content";


type ImageCardSectionProps = {
  item: ImageCardItem;
  className?: string;
};

function ImageCardSection({ item, className }: ImageCardSectionProps) {
  return (
    <Card
      className={cn(
        "relative h-full min-h-[500px] overflow-hidden lg:rounded-lg",
        className
      )}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image.src})`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <CardContent className="relative z-10 flex h-full items-center justify-center text-center px-4 py-24">
        <h2 className="text-4xl md:text-6xl font-bold text-amber-100">
          {item.title}
        </h2>
      </CardContent>
    </Card>
  );
}

export { ImageCardSection };
