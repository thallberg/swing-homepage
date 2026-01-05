"use client";

import { homeHero } from "@/components/layout/data/hero.content";
import { Hero } from "@/components/layout/hero";
import { mockBookings } from "@/components/sections/day-events-panel/data/event-content";
import { DayEventsPanel } from "@/components/sections/day-events-panel/DayEventsPanel";
import { homeImageCard } from "@/components/sections/image-card/data/image-content";
import { ImageCardSection } from "@/components/sections/image-card/image.card";
import {
  infoHome,
  serviceHome,
} from "@/components/sections/info-card/data/card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";
import { Calendar } from "@/components/ui/calendar";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <main className="relative">
      <Hero item={homeHero} />

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

      <div className="flex w-full flex-col gap-4 pt-4 pb-4 md:flex-row">
        {/* Calendar */}
        <div className="flex w-full justify-center md:w-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="max-w-sm rounded-2xl border"
          />
        </div>

        {/* Day events */}
        <div className="flex w-full justify-center md:w-1/2">
          <DayEventsPanel date={date} events={mockBookings} />
        </div>
      </div>

      <div className="w-full flex-col bg-blue/10 p-4 rounded-lg">
        <InfocardSection
          items={infoHome}
          className="grid grid-cols-1 md:grid-cols-3 gap-2"
          cardClassName="bg-transparent border-none shadow-none"
        />
      </div>
    </main>
  );
}
