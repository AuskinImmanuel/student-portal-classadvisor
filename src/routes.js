// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformation from "views/Dashboard/GeneralInformation";

import {
  HomeIcon,
  StatsIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/GeneralInformation",
    name: "Report",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin",
  },
];
export default dashRoutes;
