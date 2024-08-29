import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage() {
  const data = useLoaderData();
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
