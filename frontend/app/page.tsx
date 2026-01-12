"use client";

import { homeHero } from "@/app/data/content/hero-content/hero.content";
import { Hero } from "@/components/layout/hero";
import { mockBookings } from "@/app/data/content/dayevent-content/event-content";
import { DayEventsPanel } from "@/components/sections/day-events-panel/DayEventsPanel";
import { homeImageCard } from "@/app/data/content/imagecard-content/image-content";
import { ImageCardSection } from "@/components/sections/image-card/image.card";
import {
  infoHome,
  serviceHome,
} from "@/app/data/content/infocard-content/card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";
import { useState } from "react";
import { CalendarCard } from "@/components/sections/calendar-card/calendarcard";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <main className="relative">
      <Hero item={homeHero} />
      <div className="max-w-[96vw] m-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
          <div className="w-full lg:w-1/2 flex bg-blue/10 p-4 rounded-lg">
            <InfocardSection
              items={infoHome}
              className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2"
            />
          </div>

          <div className="w-full lg:w-1/2 flex">
            <ImageCardSection
              item={homeImageCard}
              className="flex-1 max-w-[90vw] m-auto"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
          <div className="w-full lg:w-1/2 flex bg-blue/10 p-4 rounded-lg">
            <InfocardSection
              items={serviceHome}
              className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2"
            />
          </div>

          <div className="w-full lg:w-1/2 flex lg:order-first">
            <ImageCardSection
              item={homeImageCard}
              className="flex-1 max-w-[90vw] m-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-4 pb-4 lg:grid-cols-2">
          <div className="flex justify-center">
            <CalendarCard date={date} onSelect={setDate} />
          </div>

          <div className="flex justify-center">
            <div className="w-full flex">
              <DayEventsPanel date={date} events={mockBookings} />
            </div>
          </div>
        </div>

        <div className="w-full flex-col bg-blue/10 p-4 rounded-lg">
          <InfocardSection
            items={infoHome}
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
            cardClassName="bg-transparent border-none shadow-none"
          />
        </div>
      </div>
    </main>
  );
}
