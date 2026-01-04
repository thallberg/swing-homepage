"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingEvent } from "./data/event-content";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";


type DayEventsPanelProps = {
  date?: Date;
  events: BookingEvent[];
};

function formatDateKey(date?: Date) {
  if (!date) return null;
  return date.toISOString().split("T")[0];
}

function DayEventsPanel({ date, events }: DayEventsPanelProps) {
  const dateKey = formatDateKey(date);
  const todaysEvents = dateKey
    ? events.filter((e) => e.date === dateKey)
    : [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          {date
            ? `Bokningar ${date.toLocaleDateString("sv-SE")}`
            : "Välj ett datum"}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {todaysEvents.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Inga bokningar denna dag.
          </p>
        ) : (
          todaysEvents.map((event) => (
            <div key={event.id}>
              <div className="flex items-center justify-between">
                <p className="font-medium">{event.title}</p>
                {event.time && (
                  <Badge variant="outline">{event.time}</Badge>
                )}
              </div>
              <Separator className="mt-2" />
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export { DayEventsPanel };
