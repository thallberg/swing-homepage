import { aboutHero } from "@/components/layout/data/hero.content";
import { Hero } from "@/components/layout/hero";
import { homeImageCard } from "@/components/sections/image-card/data/image-content";
import { ImageCardSection } from "@/components/sections/image-card/image.card";
import {
  infoAbout,
  infoAboutTeam,
} from "@/components/sections/info-card/data/card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";
import { personCardContent } from "@/components/sections/person-section.tsx/data/person.data";
import { PersonCardSection } from "@/components/sections/person-section.tsx/personsection";

export default function AboutPage() {
  return (
    <main className="relative">
      <Hero item={aboutHero} />

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex bg-blue/10 p-4 rounded-lg items-center">
          <InfocardSection
            items={infoAbout}
            cardClassName="border-0 shadow-none bg-transparent max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
            className="m-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 flex">
          <ImageCardSection item={homeImageCard} className="flex-1" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
        <div className="w-full lg:w-1/2 flex p-4 bg-blue/10 rounded-lg items-center">
          <InfocardSection
            items={infoAboutTeam}
            cardClassName="border-0 shadow-none bg-transparent max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
            className="m-auto"
          />
        </div>

        <div className="w-full lg:order-first lg:w-1/2">
          <PersonCardSection items={personCardContent} className="flex-1" />
        </div>
      </div>
    </main>
  );
}
