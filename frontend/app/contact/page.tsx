"use client";

import { contactHero } from "@/app/data/content/hero-content/hero.content";
import { Hero } from "@/components/layout/hero";
import { ContactForm } from "@/components/sections/contact-form/contact.form";

export default function Home() {
  return (
    <main className="relative">
      <Hero item={contactHero} />
      <div className="max-w-[96vw] m-auto">

        <section className="bg-muted/40 py-16">
          <div className="mx-auto max-w-3xl px-4">
            {/* Card */}
            <div className="rounded-2xl bg-background p-8 shadow-sm text-center w-2/3 m-auto">
              <h1 className="mb-2 text-3xl font-semibold text-foreground">
                Kontakta oss
              </h1>

              <p className="mb-8 text-muted-foreground w-2/3 m-auto">
                Har du frågor, funderingar eller speciella önskemål? Fyll i
                formuläret nedan så återkommer vi så snart vi kan.
              </p>

              <ContactForm />
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
