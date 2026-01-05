"use client";

import { contactInfoItems } from "@/app/data/content/contact-content/contact.data";


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
