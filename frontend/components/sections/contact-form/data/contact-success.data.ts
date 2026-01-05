import { CheckCircle, Info } from "lucide-react"
import type { CardItem } from "@/components/sections/info-card/data/card.content"

export const contactSuccessInfo: CardItem[] = [
  {
    title: "Meddelandet är skickat",
    body:
      "Tack för att du kontaktade oss! Vi har tagit emot ditt meddelande och återkommer så snart vi kan.",
    icon: CheckCircle,
  },
  {
    title: "Vad händer nu?",
    body:
      "Vi går igenom ditt ärende och kontaktar dig via e-post. Normalt svarar vi inom 24 timmar.",
    icon: Info,
  },
]
