import SignIn from "views/Pages/SignIn.js";
import GeneralInformationdata from "views/Pages/GeneralInformationdata";

var NdashRoutes = [
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata,
    layout: "/admin",
  },
  {
    path: "/signin",
    component: SignIn,
    layout: "/auth",
  },
];
export default NdashRoutes;
