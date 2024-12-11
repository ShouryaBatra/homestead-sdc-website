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
  root: {
    title: "Home",
    component: Home,
    path: "/",
    heroTitle: "Homestead Speech & Debate Club",
    isIncludedInHeader: false,
  },
  home: {
    title: "Home",
    component: Home,
    path: "/home",
    heroTitle: "Homestead Speech & Debate Club",
    isIncludedInHeader: true,
  },
  calendar: {
    title: "Calendar",
    component: Calendar,
    path: "/calendar",
    heroTitle: "Calendar",
    isIncludedInHeader: true,
  },
  meetings: {
    title: "Meetings",
    component: Meetings,
    path: "/meetings",
    heroTitle: "Meetings",
    isIncludedInHeader: true,
  },
  // summaries: { title: "Summaries", path: "/summaries", heroTitle: "Summaries" },
  tournaments: {
    title: "Tournaments",
    component: Tournaments,
    path: "/tournaments",
    heroTitle: "Tournaments",
    isIncludedInHeader: true,
  },
  links: {
    title: "Links",
    component: Links,
    path: "/links",
    heroTitle: "Links",
    isIncludedInHeader: true,
  },
  events: {
    title: "Events",
    component: Events,
    path: "/events",
    heroTitle: "Events",
    isIncludedInHeader: true,
  },
  mustangSpotlight: {
    title: "Mustang Spotlight",
    component: MustangSpotlight,
    path: "/mustang-spotlight",
    heroTitle: "Mustang Spotlight",
    isIncludedInHeader: true,
  },
  about: {
    title: "About",
    path: "/about",
    heroTitle: "About",
    isIncludedInHeader: true,
  },
};

export default routesObj;
