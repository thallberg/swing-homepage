"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "../../../app/data/content/service-content/service.card.content";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  const [open, setOpen] = useState(false);
  
  return (
    <Card className={cn("overflow-hidden h-full cursor-pointer rounded-lg ", className)}>
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
        <Collapsible open={open} onOpenChange={setOpen}>
          {/* TEXT – renderas EN gång */}
          <p
            className={cn(
              "text-lg text-muted-foreground transition-all",
              !open && "line-clamp-2"
            )}
          >
            {body}
          </p>

          {/* TRIGGER – alltid efter text */}
          <CollapsibleTrigger asChild>
            <Button variant="link" size="sm" className="text-amber-900 hover:underline">
              {open ? "Minimera" : "Läs mer"}
            </Button>
          </CollapsibleTrigger>

          {/* Krävs av Radix men innehåller inget duplicerat */}
          <CollapsibleContent />
        </Collapsible>

        <p className="text-lg font-bold text-green-700 mt-auto">
          Pris: {price} Kr / person
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
