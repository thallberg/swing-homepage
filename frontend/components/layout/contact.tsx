"use client";

import { Card } from "@/components/ui/card";
import { ContactForm } from "../sections/contact-form/contact.form";
import { ImageCardSection } from "../sections/image-card/image.card";
import { homeImageCard } from "@/app/data/content/imagecard-content/image-content";

function Contact() {
  return (
    <section className="pt-4 pb-4 max-w-[96vw] m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* ===== CONTACT ===== */}
        <div className="flex">
          <Card className="flex-1 rounded-sm p-8 text-center">
            <h2 className="mb-2 text-3xl font-semibold text-foreground">
              Kontakta oss
            </h2>

            <p className="mb-8 text-muted-foreground max-w-md mx-auto">
              Har du frågor, funderingar eller speciella önskemål? Fyll i
              formuläret nedan så återkommer vi så snart vi kan.
            </p>

            <ContactForm className="w-full max-w-md m-auto" />
          </Card>
        </div>

        {/* ===== IMAGE CARD ===== */}
        <div className="flex">
          <ImageCardSection item={homeImageCard} className="flex-1" />
        </div>
      </div>
    </section>
  );
}

export { Contact };
