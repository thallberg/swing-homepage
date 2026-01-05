import { SocialLinkItem } from "@/components/sections/social-links/sociallinks";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const socialLinks: SocialLinkItem[] = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: Facebook,
    hoverClass: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: Instagram,
    hoverClass: "hover:text-orange-400",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    hoverClass: "hover:text-blue-400",
  },
];