
export type BookingEvent = {
  id: string;
  title: string;
  description?: string;
  date: string; // YYYY-MM-DD
  time?: string;
};


export const mockBookings: BookingEvent[] = [
  // ===== IDAG (ex: 2026-01-03) =====
  {
    id: "1",
    title: "Turridning – Nybörjare",
    time: "10:00",
    date: "2026-01-03",
  },
  {
    id: "2",
    title: "Privat lektion",
    time: "14:00",
    date: "2026-01-03",
  },

  // ===== IMORGON =====
  {
    id: "3",
    title: "Turridning – Fortsättning",
    time: "09:30",
    date: "2026-01-04",
  },
  {
    id: "4",
    title: "Barnridning",
    time: "13:00",
    date: "2026-01-04",
  },

  // ===== OM 2 DAGAR =====
  {
    id: "5",
    title: "Islandshäst – Prova på",
    time: "11:00",
    date: "2026-01-05",
  },

  // ===== OM 3 DAGAR =====
  {
    id: "6",
    title: "Långtur i naturen",
    time: "08:30",
    date: "2026-01-06",
  },

  // ===== SKA INTE VISAS (för test) =====
  {
    id: "7",
    title: "Kvällstur – Avancerad",
    time: "18:00",
    date: "2026-01-07",
  },
];
