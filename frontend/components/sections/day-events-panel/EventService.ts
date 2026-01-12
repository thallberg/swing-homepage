import { generateRecurringBookings, mockBookings, recurringRules } from "@/app/data/content/dayevent-content/event-content";


export function getAllEvents() {
  return [
    ...mockBookings,
    ...generateRecurringBookings(recurringRules, 30),
  ];
}

export function getEventById(id: string) {
  return getAllEvents().find(e => e.id === id);
}
