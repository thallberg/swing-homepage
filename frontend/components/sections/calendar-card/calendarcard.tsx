"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

type CalendarCardProps = {
  date?: Date;
  onSelect: (date?: Date) => void;
};

function CalendarCard({ date, onSelect }: CalendarCardProps) {
  return (
    <Card className="w-full bg-blue/5 shadow-sm border-none">
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          weekStartsOn={1}
          className="rounded-lg border w-2/3 shadow-none! border-none p-4"
        />
      </CardContent>
    </Card>
  );
}

export { CalendarCard };
