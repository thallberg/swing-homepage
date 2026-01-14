import { generateRecurringBookings, mockBookings, recurringRules } from "@/app/data/content/dayevent-content/event-content";
import type { BookingEvent } from "@/app/data/content/dayevent-content/event-content";


export function getAllEvents(): BookingEvent[] {
  const allEvents = [
    ...mockBookings,
    ...generateRecurringBookings(recurringRules, 30),
  ];
  
  // Ta bort dubbletter baserat på id
  const uniqueEvents = Array.from(
    new Map(allEvents.map(event => [event.id, event])).values()
  );
  
  return uniqueEvents;
}

export function getEventById(id: string) {
  return getAllEvents().find(e => e.id === id);
}
