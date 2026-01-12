"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "../../../app/data/content/service-content/service.card.content";

/* ----------------------------------
   Internal ServiceCard
----------------------------------- */

type ServiceCardProps = ServiceItem & {
  className?: string;
  imageClassName?: string;
};

function ServiceCard({
  title,
  body,
  price,
  image,
  className,
  imageClassName,
}: ServiceCardProps) {
  return (
    <Card className={cn("overflow-hidden h-full cursor-pointer", className)}>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className={cn(
          "w-full object-cover",
          imageClassName
        )}
      />

      <CardContent className="flex flex-col flex-1 space-y-1 text-center">
        <h2 className="text-xl font-semibold text-amber-900">{title}</h2>

        <p className="text-lg text-muted-foreground">{body}</p>

        <p className="text-lg font-bold text-green-700 mt-auto">
          Pris: {price} / person
        </p>
      </CardContent>
    </Card>
  );
}

/* ----------------------------------
   ServiceCardSection (PUBLIC)
----------------------------------- */

type ServiceCardSectionProps = {
  items: ServiceItem[];
  className?: string; // wrapper
  cardClassName?: string; // per card
  imageClassName?: string; // per image
};

function ServiceCardSection({
  items,
  className,
  cardClassName,
  imageClassName,
}: ServiceCardSectionProps) {
  return (
    <section className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ServiceCard
            key={item.title}
            {...item}
            className={cardClassName}
            imageClassName={imageClassName}
          />
        ))}
      </div>
    </section>
  );
}

export { ServiceCardSection };
