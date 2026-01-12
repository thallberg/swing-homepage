// components/cards/service-card-content.ts

export type ServiceItem = {
  title: string;
  body: string;
  price: number;
  image: string;
};

export const serviceCardContent: ServiceItem[] = [
  {
    title: "Turridning",
    body:
      "Upptäck vackra landskap på hästryggen tillsammans med våra erfarna guider. Turridningen tar dig genom skogar, öppna fält och natursköna stigar i lugnt tempo. Passar både nybörjare och erfarna ryttare, och anpassas efter gruppens nivå för en trygg och minnesvärd upplevelse.",
    price: 600,
    image: "/booking/imageContent.webp",
  },
  {
    title: "Privat Lektion",
    body:
      "Få personlig träning anpassad helt efter dina mål och din erfarenhet. Under lektionen arbetar du med sits, balans och kommunikation med hästen tillsammans med en erfaren instruktör. Perfekt för dig som vill utvecklas snabbare, finslipa tekniken eller få extra stöd i din ridning.",
    price: 700,
    image: "/booking/imageContent.webp",
  },
  {
    title: "Övernattning",
    body:
      "Upplev en oförglömlig vistelse med övernattning på vår mysiga gård. Paketet inkluderar ridning, tid i stallet samt möjlighet att delta i den dagliga hästskötseln. Vakna upp till lugnet på landet och njut av närheten till både djur och natur.",
    price: 1200,
    image: "/booking/imageContent.webp",
  },
  {
    title: "Lyxpaketet",
    body:
      "Vårt mest flexibla och exklusiva paket där du själv skräddarsyr din vistelse. Kombinera ridturer, privata lektioner, boende och extra upplevelser efter dina önskemål. Ett perfekt val för dig som vill ha det lilla extra och skapa en helt unik hästupplevelse.",
    price: 1200,
    image: "/booking/imageContent.webp",
  },

];
