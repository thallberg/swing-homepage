"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export type PersonItem = {
  name: string;
  image: StaticImageData;
  alt: string;
  personinfo: string;
  mail: string;
};

type PersonCardProps = PersonItem & {
  className?: string;
  imageClassName?: string;
};

function PersonCard({
  image,
  alt,
  name,
  personinfo,
  mail,
  className,
  imageClassName,
}: PersonCardProps) {
  return (
    <Card className={cn("overflow-hidden text-center gap-0", className)}>
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={alt}
          className={cn("w-full object-cover", imageClassName)}
          priority={false}
        />
      </CardHeader>

      <CardContent className="md:text-left">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{personinfo}</p>
        <p className="text-sm">{mail}</p>
      </CardContent>
    </Card>
  );
}

type PersonCardSectionProps = {
  items: PersonItem[];
  className?: string; // wrapper
  cardClassName?: string; // 👈 NEW
  imageClassName?: string; // 👈 NEW (valfritt men bra)
};

function PersonCardSection({
  items,
  className,
  cardClassName,
  imageClassName,
}: PersonCardSectionProps) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((person) => (
          <PersonCard
            key={person.name}
            {...person}
            className={cardClassName}
            imageClassName={imageClassName}
          />
        ))}
      </div>
    </section>
  );
}

export { PersonCardSection, PersonCard };
