import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function NewEventPage() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const fd = await request.formData();
  const eventData = {
    title: fd.get("title"),
    image: fd.get("image"),
    date: fd.get("date"),
    description: fd.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not send events" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
