"use client";

import { CardItem } from "@/app/data/content/infocard-content/card.content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ----------------------------------
   Internal Infocard
----------------------------------- */

type InfocardProps = CardItem & {
  className?: string;
  iconClassName?: string;
};

function Infocard({
  icon: Icon,
  title,
  body,
  className,
  iconClassName,
}: InfocardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center text-center gap-2",
        className
      )}
    >
      <CardHeader className="w-full flex flex-col items-center">
        {Icon && (
          <Icon
            className={cn(
              "size-14",
              iconClassName ?? "text-amber-300"
            )}
            aria-hidden="true"
          />
        )}
        <CardTitle className="text-xl text-amber-900">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center">
        <p className="text-lg text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}

/* ----------------------------------
   InfocardSection (PUBLIC)
----------------------------------- */

type InfocardSectionProps = {
  items: CardItem[];
  className?: string; // wrapper
  cardClassName?: string; // per card
  iconClassName?: string; // per icon (optional override)
};

function InfocardSection({
  items,
  className,
  cardClassName,
  iconClassName,
}: InfocardSectionProps) {
  return (
    <section className={className}>
      {items.map((item, index) => (
        <Infocard
          key={`${item.title}-${index}`}
          {...item}
          className={cardClassName}
          iconClassName={iconClassName ?? item.iconClassName}
        />
      ))}
    </section>
  );
}

export { InfocardSection, Infocard };