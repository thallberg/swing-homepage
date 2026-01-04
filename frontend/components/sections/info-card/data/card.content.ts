import type { LucideIcon } from "lucide-react";
import {
  Users,
  User,
  Home,
  CheckCircle,
  Lightbulb,
  Puzzle,
  Flame,
  Bell,
  Scale,
  PawPrint,
  Utensils,
  Settings,
  Cake,
  Camera,
} from "lucide-react";

export type CardItem = {
  title: string;
  body: string;
  icon?: LucideIcon;
};

/* =========================
   HOME – SERVICES
========================= */

export const serviceHome: CardItem[] = [
  {
    title: "Turridning",
    body:
      "Följ med på en oförglömlig ridtur genom vacker natur, perfekt för både nybörjare och erfarna ryttare.",
    icon: Users,
  },
  {
    title: "Privat Lektion",
    body:
      "Få personlig handledning och utveckla dina ridkunskaper med en av våra erfarna instruktörer.",
    icon: User,
  },
  {
    title: "Övernattning",
    body:
      "Upplev en helg på vår gård med ridning, gemenskap och avkoppling i natursköna omgivningar.",
    icon: Home,
  },
];

/* =========================
   HOME – INFO
========================= */

export const infoHome: CardItem[] = [
  {
    title: "Personlig Upplevelse",
    body:
      "Vår erfarna personal ser till att varje tur anpassas efter dina önskemål och din ridvana – oavsett om du är nybörjare eller erfaren ryttare.",
    icon: CheckCircle,
  },
  {
    title: "Hästar för Alla",
    body:
      "Vi har lugna och trygga hästar som passar alla nivåer. Oavsett om du är nybörjare eller van ryttare hittar vi en häst som passar just dig.",
    icon: Lightbulb,
  },
  {
    title: "Magiska Naturupplevelser",
    body:
      "Upptäck fantastiska ridvägar genom skogar, över ängar och längs sjöar. Våra turer bjuder på natursköna vyer och oförglömliga upplevelser.",
    icon: Puzzle,
  },
];

/* =========================
   HOME – STATS
========================= */

export const statsHome: CardItem[] = [
  {
    title: "Nöjda Kunder",
    body: "Över 500 glada kunder varje år njuter av våra turridningar.",
    icon: Flame,
  },
  {
    title: "Turridningar Per År",
    body: "Vi anordnar mer än 300 turridningar årligen genom vackra landskap.",
    icon: Bell,
  },
  {
    title: "Höbalar per År",
    body: "Våra hästar mumsar i sig över 300 höbalar varje säsong.",
    icon: Scale,
  },
  {
    title: "Antal Hästar",
    body: "Vi har 25 välmående och kärleksfulla hästar i vår verksamhet.",
    icon: PawPrint,
  },
];

/* =========================
   BOOKING – INFO
========================= */

export const infoBooking: CardItem[] = [
  {
    title: "Här kan du boka din nästa upplevelse",
    body:
      "Välj bland våra unika upplevelser och säkra din plats redan idag. Oavsett om du vill utforska naturen till häst, förbättra din ridteknik med en privatlektion eller njuta av en avkopplande övernattning på vår mysiga gård, har vi något för dig. Våra erfarna guider och instruktörer ser till att du får en trygg och minnesvärd upplevelse, oavsett nivå. Boka ditt äventyr nu och skapa oförglömliga minnen!",
  },
];

/* =========================
   BOOKING – STATS
========================= */

export const infoBookingStats: CardItem[] = [
  {
    title: "Måltider för Alla",
    body:
      "Alla våra paket inkluderar fika och/eller måltid – med flera alternativ som passar både vegetarianer och allergiker. Vi ser till att du får något gott som passar just dig!",
    icon: Utensils,
  },
  {
    title: "Trygg Guidning",
    body:
      "Oavsett erfarenhetsnivå är du i trygga händer. Våra guider är vana att anpassa sig efter både nybörjare och vana ryttare, och ser till att du känner dig bekväm från start till mål.",
    icon: Settings,
  },
  {
    title: "Anpassa Din Vistelse",
    body:
      "Du väljer själv vad din upplevelse ska innehålla – bara ridning, eller en heldag med fodring, hästskötsel och närhet till djuren. Vi skräddarsyr turen efter dina intressen.",
    icon: Cake,
  },
  {
    title: "Flexibla Lösningar",
    body:
      "Gör din bokning personlig – vi erbjuder möjligheter till kalas, svensexor, möhippor eller andra speciella tillfällen. Låt oss skapa en oförglömlig upplevelse anpassad efter dina önskemål!",
    icon: Camera,
  },
];

/* =========================
   ABOUT
========================= */

export const infoAbout: CardItem[] = [
  {
    title: "Om Vårt Företag",
    body:
      "Vår gård är specialiserad på turridning med islandshästar och erbjuder ett brett utbud av ridturer året runt. Vi har allt från kortare nybörjarturer på lugna skogsstigar till längre dagsutflykter genom öppna landskap och vackra ridleder. Våra hästar är trygga, välutbildade och anpassade för både barn och vuxna.",
  },
];

export const infoAboutTeam: CardItem[] = [
  {
    title: "Möt Vårt Team",
    body:
      "Vårt team består av passionerade personer som alla delar en kärlek för islandshästar och naturen. Här på gården arbetar erfarna ryttare, hästskötare och guider som tillsammans skapar en trygg och lärorik upplevelse för våra gäster. Oavsett om du är en nybörjare eller erfaren ryttare, är vårt mål att du ska känna friheten och glädjen i varje ridtur.",
  },
];
