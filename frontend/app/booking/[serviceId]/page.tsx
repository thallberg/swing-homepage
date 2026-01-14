import { notFound } from "next/navigation";
import { serviceCardContent } from "@/app/data/content/service-content/service.card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";
import { ServiceCardSection } from "@/components/sections/service-card/service.card";
import type { CardItem } from "@/app/data/content/infocard-content/card.content";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Hero } from "@/components/layout/hero";
import { bookingHero } from "@/app/data/content/hero-content/hero.content";


type ServicePageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

// Funktion för att konvertera title till slug
function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

// Funktion för att hitta service baserat på slug
function getServiceBySlug(slug: string) {
  return serviceCardContent.find(
    (service) => titleToSlug(service.title) === slug
  );
}

// Funktion för att konvertera service till CardItem[]
function serviceToInfoCards(service: typeof serviceCardContent[0]): CardItem[] {
  return [
    {
      title: service.title,
      body: service.body,
    },
    {
      title: "Pris",
      body: `${service.price} Kr / person`,
    },
  ];
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = getServiceBySlug(serviceId);

  if (!service) {
    notFound();
  }

  // Filtrera bort den aktuella servicen från listan
  const otherServices = serviceCardContent.filter(
    (s) => titleToSlug(s.title) !== serviceId
  );

  const infoCards = serviceToInfoCards(service);

  return (
    <main className="relative">
      <Hero item={bookingHero} className="h-[50vh]" />
      <div className="max-w-[96vw] m-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-8 pb-4">
          {/* Image Card - använder samma styling som ImageCardSection */}
          <div className="w-full lg:w-1/2 flex">
            <Card className="relative h-full min-h-[500px] overflow-hidden lg:rounded-lg w-full">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundAttachment: "fixed",
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Content */}
              <CardContent className="relative z-10 flex h-full items-center justify-center text-center px-4 py-24">
                <h2 className="text-4xl md:text-6xl font-bold text-amber-100">
                  {service.title}
                </h2>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="w-full lg:w-1/2 flex bg-blue/10 p-4 rounded-lg items-center">
            <InfocardSection
              items={infoCards}
              cardClassName="border-0 shadow-none bg-transparent max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]"
              className="m-auto"
            />
          </div>
        </div>

        {/* Other Services */}
        {otherServices.length > 0 && (
          <div className="w-full p-4 pt-8 pb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-amber-900">
              Andra bokningar
            </h2>
            <ServiceCardSection
              items={otherServices}
              className="flex-1 m-auto"
            />
          </div>
        )}
      </div>
    </main>
  );
}
