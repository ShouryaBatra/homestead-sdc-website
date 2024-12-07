import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Meetings from "./pages/Meetings/Meetings";
import Calendar from "./pages/Calendar/Calendar";
import Events from "./pages/Events/Events";
import Tournaments from "./pages/Tournaments/Tournaments";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about/",
    element: <About />,
  },
  {
    path: "/calendar/",
    element: <Calendar />,
  },
  {
    path: "/events/",
    element: <Events />,
  },
  {
    path: "/meetings/",
    element: <Meetings />,
  },
  {
    path: "/tournaments/",
    element: <Tournaments />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
