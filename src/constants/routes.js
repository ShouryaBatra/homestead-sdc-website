import Home from "../pages/Home";
import Meetings from "../pages/Meetings";
import Calendar from "../pages/Calendar/Calendar";
import Events from "../pages/Events/Events";
import Tournaments from "../pages/Tournaments";
import About from "../pages/About/About";
import Layout from "../components/Layout";
import Links from "../pages/Links";
import MustangSpotlight from "../pages/MustangSpotlight";

const routesObj = {
  home: {
    title: "Home",
    component: Home,
    path: "/",
    heroTitle: "Homestead Speech & Debate Club",
  },
  home: {
    title: "Home",
    component: Home,
    path: "/home",
    heroTitle: "Homestead Speech & Debate Club",
  },
  calendar: {
    title: "Calendar",
    component: Calendar,
    path: "/calendar",
    heroTitle: "Calendar",
  },
  meetings: {
    title: "Meetings",
    component: Meetings,
    path: "/meetings",
    heroTitle: "Meetings",
  },
  // summaries: { title: "Summaries", path: "/summaries", heroTitle: "Summaries" },
  tournaments: {
    title: "Tournaments",
    component: Tournaments,
    path: "/tournaments",
    heroTitle: "Tournaments",
  },
  links: {
    title: "Links",
    component: Links,
    path: "/links",
    heroTitle: "Links",
  },
  events: {
    title: "Events",
    component: Events,
    path: "/events",
    heroTitle: "Events",
  },
  mustangSpotlight: {
    title: "Mustang Spotlight",
    component: MustangSpotlight,
    path: "/mustang-spotlight",
    heroTitle: "Mustang Spotlight",
  },
  about: { title: "About", path: "/about", heroTitle: "About" },
};

export default routesObj;
