"use client";

import { homeImageCard } from "@/app/data/content/imagecard-content/image-content";
import { ImageCardSection } from "@/components/sections/image-card/image.card";
import {
  infoBooking,
  infoBookingStats,
  serviceHome,
} from "@/app/data/content/infocard-content/card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";
import { personCardContent } from "@/app/data/content/person-content/person.data";
import { PersonCardSection } from "@/components/sections/person-section.tsx/personsection";
import { ServiceCardSection } from "@/components/sections/service-card/service.card";
import { serviceCardContent } from "../data/content/service-content/service.card.content";
import { Hero } from "@/components/layout/hero";
import { bookingHero } from "../data/content/hero-content/hero.content";

export default function Home() {
  return (
    <main className="relative">
      <Hero item={bookingHero} />
      <div className="max-w-[96vw] m-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
          <div className="w-full lg:w-1/2 flex p-4 bg-blue/10 rounded-lg items-center">
            <InfocardSection
              items={infoBooking}
              cardClassName="border-0 shadow-none bg-transparent max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]"
              className="m-auto"
            />
          </div>

          <div className="w-full lg:order-first lg:w-1/2">
            <PersonCardSection
              items={personCardContent}
              className="flex-1"
              cardClassName="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
          <div className="w-full lg:w-1/2 flex">
            <ImageCardSection
              item={homeImageCard}
              className="flex-1 max-w-[90vw] m-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex bg-blue/10 p-4 rounded-lg lg:order-first">
            <InfocardSection
              items={serviceHome}
              className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2"
            />
          </div>
        </div>

        <div className="w-full flex-col bg-blue/10 p-4 rounded-lg">
          <InfocardSection
            items={infoBookingStats}
            className="grid grid-cols-1 max-w-[70vw]  md:grid-cols-2 md:max-w-[80vw] lg:grid-cols-4 lg:max-w-[100vw] gap-2 m-auto"
            cardClassName="bg-transparent border-none shadow-none"
          />
        </div>
        <div className="w-full lg:order-first p-4 max-w-[80vw] m-auto">
          <ServiceCardSection
            items={serviceCardContent}
            className="flex-1 m-auto"
          />
        </div>
        <div className="w-full min-h-[30vh] flex p-4 bg-blue/10 rounded-lg items-center">
          <InfocardSection
            items={infoBooking}
            cardClassName="border-0 shadow-none bg-transparent max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw]"
            className="m-auto"
          />
        </div>
      </div>
    </main>
  );
}
