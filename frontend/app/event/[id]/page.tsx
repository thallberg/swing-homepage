import { notFound } from "next/navigation";
import { getEventById } from "@/components/sections/day-events-panel/EventService";

type EventPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EventPage({ params }: EventPageProps) {
    const { id } = await params;
    const event = getEventById(id);

    if (!event) {
        notFound();
    }

    return (
        <div>
          <h1>{event.title}</h1>
          <p>{event.date} {event.time}</p>
        </div>
      );
}
