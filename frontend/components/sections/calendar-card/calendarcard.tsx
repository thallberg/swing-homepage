"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

type CalendarCardProps = {
  date?: Date;
  onSelect: (date?: Date) => void;
};

function CalendarCard({ date, onSelect }: CalendarCardProps) {
  return (
    <Card className="w-full bg-blue/5 shadow-none rounded-none border-t-blue/20 border-r-blue/20 border-l-blue/20 border-b-blue/5        lg:border-t-blue/20 lg:border-r-blue/5 lg:border-l-blue/20 lg:border-b-blue/20 ">
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          weekStartsOn={1}
          className="rounded-none border w-2/3 border-none p-4"
        />
      </CardContent>
    </Card>
  );
}

export { CalendarCard };
