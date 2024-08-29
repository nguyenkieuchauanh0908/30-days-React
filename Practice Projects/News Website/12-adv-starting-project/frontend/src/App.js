import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventDetailPage from "./pages/EventDetail";
import EventsPage from "./pages/Events";
import RootLayout from "./pages/Root";
import EventRootLayout from "./pages/EventRoot";
import { loader as eventsLoader } from "./pages/Events";
import { loader as eventLoader } from "./pages/EventDetail";
import { action as newEventAction } from "./pages/NewEvent";
import ErrorPage from "./pages/Error";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
