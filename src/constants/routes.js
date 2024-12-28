import Home from "../pages/Home";
import Meetings from "../pages/Meetings";
import Calendar from "../pages/Calendar";
import Events from "../pages/Events";
import Tournaments from "../pages/Tournaments";
import About from "../pages/About";
import Layout from "../components/Layout";
import Links from "../pages/Links";
import MustangSpotlight from "../pages/MustangSpotlight";
import GeneralMeetings from "../pages/Summaries/GeneralMeetings";
import LincolnDouglas from "../pages/Summaries/LincolnDouglas";
import PublicForum from "../pages/Summaries/PublicForum";
import Congress from "../pages/Summaries/Congress";
import Original from "../pages/Summaries/Original";
import Interpretive from "../pages/Summaries/Interpretive";

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
  summaries: {
    title: "Summaries",
    isIncludedInHeader: true,
    isMenu: true,
    path: "/summaries",
    items: [
      {
        title: "General Meetings",
        path: "/summaries/general-meetings",
      },
      {
        title: "Lincoln Douglas",
        path: "/summaries/lincoln-douglas",
      },
      {
        title: "Public Forum",
        path: "/summaries/public-forum",
      },
      {
        title: "Congress",
        path: "/summaries/congress",
      },
      {
        title: "Original",
        path: "/summaries/original",
      },
      {
        title: "Interpretive",
        path: "/summaries/interpretive",
      },
    ],
  },
  generalMeetings: {
    title: "General Meetings",
    component: GeneralMeetings,
    path: "/summaries/general-meetings",
    heroTitle: "General Meetings",
    isIncludedInHeader: false,
  },
  lincolnDouglas: {
    title: "Lincoln Douglas",
    component: LincolnDouglas,
    path: "/summaries/lincoln-douglas",
    heroTitle: "Lincoln Douglas",
    isIncludedInHeader: false,
  },
  publicForum: {
    title: "Public Forum",
    component: PublicForum,
    path: "/summaries/public-forum",
    heroTitle: "Public Forum",
    isIncludedInHeader: false,
  },
  congress: {
    title: "Congress",
    component: Congress,
    path: "/summaries/congress",
    heroTitle: "Congress",
    isIncludedInHeader: false,
  },
  original: {
    title: "Original",
    component: Original,
    path: "/summaries/original",
    heroTitle: "Original",
    isIncludedInHeader: false,
  },
  interpretive: {
    title: "Interpretive",
    component: Interpretive,
    path: "/summaries/interpretive",
    heroTitle: "Interpretive",
    isIncludedInHeader: false,
  },
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
    component: About,
    path: "/about",
    heroTitle: "About",
    isIncludedInHeader: true,
  },
};

export default routesObj;
