import { LucideIcon, Mail, MapPin, Phone } from "lucide-react";

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: "123 Hästvägen, 456 78",
  },
  {
    icon: Mail,
    label: "kontakt@exempel.se",
  },
  {
    icon: Phone,
    label: "070-123 45 67",
  },
];
