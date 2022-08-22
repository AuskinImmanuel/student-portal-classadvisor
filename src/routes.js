// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformation from "views/Dashboard/GeneralInformation";
import Academics from "views/Dashboard/Academics";
import ProfessionalDevelopment from "views/Dashboard/ProfessionalDevelopment";
import InternationalExposure from "views/Dashboard/InternationalExposure";
import Extracurricular from "views/Dashboard/Extracurricular";
import FacultyFeedback from "views/Dashboard/FacultyFeedback";
import Profile from "views/Dashboard/Profile.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
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
  // {
  //   path: "/Academics",
  //   name: "Academics",
  //   icon: <DocumentIcon color="inherit" />,
  //   component: Academics,
  //   layout: "/admin",
  // },
  // {
  //   path: "/ProfessionalDevelopment",
  //   name: (
  //     <p
  //       style={{
  //         textAlign: "left",
  //         lineHeight: "1.2rem",
  //         whiteSpace: "normal",
  //         wordWrap: "break-word",
  //       }}
  //     >
  //       Professional Development
  //     </p>
  //   ),
  //   icon: <PersonIcon color="inherit" />,
  //   component: ProfessionalDevelopment,
  //   layout: "/admin",
  // },
  // {
  //   path: "/InternationalExposure",
  //   name: (
  //     <p
  //       style={{
  //         textAlign: "left",
  //         lineHeight: "1.2rem",
  //         whiteSpace: "normal",
  //         wordWrap: "break-word",
  //       }}
  //     >
  //       International Exposure
  //     </p>
  //   ),
  //   icon: <RocketIcon color="inherit" />,
  //   component: InternationalExposure,
  //   layout: "/admin",
  // },
  // {
  //   path: "/Extracurricular",
  //   name: "Extracurricular",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Extracurricular,
  //   layout: "/admin",
  // },
  // {
  //   path: "/FacultyFeedback",
  //   name: (
  //     <p
  //       style={{
  //         textAlign: "left",
  //         lineHeight: "1.2rem",
  //         whiteSpace: "normal",
  //         wordWrap: "break-word",
  //       }}
  //     >
  //       Faculty Feedback and Analysis
  //     </p>
  //   ),
  //   icon: <StatsIcon color="inherit" />,
  //   component: FacultyFeedback,
  //   layout: "/admin",
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   icon: <PersonIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin",
  // },
];
export default dashRoutes;
