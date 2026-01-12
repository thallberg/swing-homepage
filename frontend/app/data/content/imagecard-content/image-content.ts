import type { StaticImageData } from "next/image";

import horse from "@/public/home/horse.webp";
import aboutHorse from "@/public/about/ImageContent.webp";

export type ImageCardItem = {
  title: string;
  image: StaticImageData;
};

/* =========================
   HOME
========================= */

export const homeImageCard: ImageCardItem = {
  title: "Du Förtjänar Det Bästa Möjliga",
  image: horse,
};

/* =========================
   ABOUT
========================= */

export const aboutImageCard: ImageCardItem = {
  title: "Du Förtjänar Det Bästa Möjliga",
  image: aboutHorse,
};
