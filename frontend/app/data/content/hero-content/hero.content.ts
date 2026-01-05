import type { StaticImageData } from "next/image";

import homeHeroImage from "@/public/home/home.webp";
import aboutHeroImage from "@/public/about/abouthero.webp";
import bookingHeroImage from "@/public/booking/bookinghero.webp";
import contactHeroImage from "@/public/contact/contacthero.webp";

export type HeroItem = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

/* =========================
   HERO – PAGES
========================= */

export const homeHero: HeroItem = {
  title: "Swings Islandshästar",
  subtitle: "Lorem ipsum dolor sit amet lorem ipsum",
  image: homeHeroImage,
};

export const aboutHero: HeroItem = {
  title: "Om Oss",
  subtitle: "Lorem ipsum dolor sit amet lorem ipsum",
  image: aboutHeroImage,
};

export const bookingHero: HeroItem = {
  title: "Boka Din Upplevelse",
  subtitle: "Lorem ipsum dolor sit amet lorem ipsum",
  image: bookingHeroImage,
};

export const contactHero: HeroItem = {
  title: "Kontakt",
  subtitle: "Lorem ipsum dolor sit amet lorem ipsum",
  image: contactHeroImage,
};
