import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    throw json({ message: "Could not fetch event detail" }, { status: 500 });
  } else {
    return response; //The loader can automatically parse the response when dev get the data from useLoaderData()
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
