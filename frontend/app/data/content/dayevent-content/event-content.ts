type RecurringRule = {
  idPrefix: string;
  title: string;
  weekday: number;
  time: string;
};

export const recurringRules: RecurringRule[] = [
  { idPrefix: "mon-ride", title: "Turridning – Veckotur", weekday: 1, time: "10:00" },
  { idPrefix: "thu-lesson", title: "Privat lektion – Veckovis", weekday: 4, time: "14:00" },
];

export type BookingEvent = {
  id: string;
  title: string;
  time: string;
  date: string;
};

export const mockBookings: BookingEvent[] = [
  {
    id: "1",
    title: "Turridning – Nybörjare",
    time: "10:00",
    date: "2026-02-03",
  },
  {
    id: "2",
    title: "Privat lektion",
    time: "14:00",
    date: "2026-12-03",
  },
];




export function generateRecurringBookings(rules: RecurringRule[], daysAhead = 30): BookingEvent[] {
  const events: BookingEvent[] = [];
  const today = new Date();
  const formatDate = (d: Date) => d.toLocaleDateString("sv-SE");

  for (let i = 0; i <= daysAhead; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    rules.forEach(rule => {
      if (date.getDay() === rule.weekday) {
        const dateStr = formatDate(date);
        events.push({
          id: `${rule.idPrefix}-${dateStr}`,
          title: rule.title,
          time: rule.time,
          date: dateStr,
        });
      }
    });
  }

  return events;
}