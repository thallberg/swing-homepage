"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BookingEvent } from "@/app/data/content/dayevent-content/event-content";

type DayEventsPanelProps = {
  date?: Date;
  events: BookingEvent[];
};

function daysBetween(a: Date, b: Date) {
  const start = new Date(a);
  const end = new Date(b);

  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

function DayEventsPanel({ date, events }: DayEventsPanelProps) {
  const baseDate = date ?? new Date();

  const todaysEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    return daysBetween(baseDate, eventDate) === 0;
  });

  const upcomingEvents = events.filter((e) => {
    const eventDate = new Date(e.date);
    const diff = daysBetween(baseDate, eventDate);
    return diff >= 1 && diff <= 3;
  });

  return (
    <Card className="w-full rounded-lg">
      <CardHeader>
        <CardTitle className="text-center">
          {date
            ? `Bokningar ${date.toLocaleDateString("sv-SE")}`
            : "Välj ett datum"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 mx-auto w-full max-w-md">
        {/* ===== IDAG ===== */}
        {todaysEvents.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Inga bokningar denna dag.
          </p>
        ) : (
          <div className="space-y-2">
            {todaysEvents.map((event) => (
              <div key={event.id}>
                <Link
                  href={`/event/${event.id}`}
                  className="group flex items-center justify-between rounded-sm py-2 hover:bg-blue/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <p className="font-medium">{event.title}</p>

                  {event.time && (
                    <Badge variant="outline" className="group-hover:underline">
                      {event.time}
                    </Badge>
                  )}
                </Link>

                <Separator />
              </div>
            ))}
          </div>
        )}

        {/* ===== KOMMANDE 3 DAGAR ===== */}
        {upcomingEvents.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground">
              Kommande 3 dagar
            </p>
            {upcomingEvents.map((event) => (
              <div key={event.id}>
                <Link
                  href={`/event/${event.id}`}
                  className="group flex items-center justify-between rounded-sm py-2 hover:bg-blue/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                >
                  <p className="text-sm">
                    {event.title}
                    <span className="ml-2 text-muted-foreground">
                      ({new Date(event.date).toLocaleDateString("sv-SE")})
                    </span>
                  </p>

                  {event.time && (
                    <Badge
                      variant="secondary"
                      className="group-hover:underline"
                    >
                      {event.time}
                    </Badge>
                  )}
                </Link>

                <Separator />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { DayEventsPanel };
