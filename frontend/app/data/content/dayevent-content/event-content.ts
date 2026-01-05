
export type BookingEvent = {
  id: string;
  title: string;
  description?: string;
  date: string; // YYYY-MM-DD
  time?: string;
};


export const mockBookings: BookingEvent[] = [
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
];
