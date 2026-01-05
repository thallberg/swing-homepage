"use client";

import { CardItem } from "@/app/data/content/infocard-content/card.content";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";


type InfocardProps = {
  icon?: LucideIcon;
  title: string;
  body: string;
  className?: string; // 👈 NEW
  iconClassName?: string;
};

function Infocard({ icon: Icon, title, body, className, iconClassName }: InfocardProps) {
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


type InfocardSectionProps = {
  items: CardItem[];
  className?: string;        // wrapper
  cardClassName?: string;    // 👈 NEW
};

function InfocardSection({
  items,
  className,
  cardClassName,
}: InfocardSectionProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <Infocard
          key={item.title}
          icon={item.icon}
          title={item.title}
          body={item.body}
          className={cardClassName} // 👈 pass down
          iconClassName={item.iconClassName}
        />
      ))}
    </div>
  );
}

export { InfocardSection, Infocard };
