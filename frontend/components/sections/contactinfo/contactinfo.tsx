"use client";

import { MapPin, Mail, Phone } from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: "123 Hästvägen, 456 78",
  },
  {
    icon: Mail,
    label: "kontakt@exempel.se",
  },
  {
    icon: Phone,
    label: "070-123 45 67",
  },
];

function ContactInfo() {
  return (
    <section className="space-y-2">
      {contactInfoItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center justify-center gap-2 md:justify-start"
          >
            <Icon className="size-5 text-amber-200" />
            <span>{item.label}</span>
          </div>
        );
      })}
    </section>
  );
}

export { ContactInfo };
