import { aboutHero } from "@/app/data/content/hero-content/hero.content";
import { Hero } from "@/components/layout/hero";
import { personCardContent } from "@/app/data/content/person-content/person.data";
import { PersonCardSection } from "@/components/sections/person-section.tsx/personsection";
import {
  infoAboutTeam,
} from "@/app/data/content/infocard-content/card.content";
import { InfocardSection } from "@/components/sections/info-card/info.card";

export default function TeamPage() {
  return (
    <main className="relative">
      <Hero item={aboutHero} />
      <div className="max-w-[96vw] m-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 pt-4 pb-4">
          <div className="w-full lg:w-1/2 flex p-4 bg-blue/10 rounded-lg items-center">
            <InfocardSection
              items={infoAboutTeam}
              cardClassName="border-0 shadow-none bg-transparent max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
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
      </div>
    </main>
  );
}
