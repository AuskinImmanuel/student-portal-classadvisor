import SignIn from "views/Pages/SignIn.js";

import GeneralInformationdata from "views/Pages/GeneralInformationdata";
import Academicsdata from "views/Pages/Academicdata";
import ProfessionalDevelopmentdata from "views/Pages/ProfessionalDevelopmentData";
import InternationalData from "views/Pages/InternationalData";
import ExtraCurricularData from "views/Pages/ExtraCurricularData";
import Feedbackdata from "views/Pages/Feedbackdata";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import AcademicsDataEdit from "views/Pages/Edit/AcademicsDataEdit";

var NdashRoutes = [
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata,
    layout: "/admin",
  },

  {
    path: "/Academicsdata",
    component: Academicsdata,
    layout: "/admin",
  },
  {
    path: "/ProfessionalDevelopmentdata",
    component: ProfessionalDevelopmentdata,
    layout: "/admin",
  },
  {
    path: "/InternationalData",
    component: InternationalData,
    layout: "/admin",
  },
  {
    path: "/ExtracurricularData",
    component: ExtraCurricularData,
    layout: "/admin",
  },
  {
    path: "/Feedbackdata",
    component: Feedbackdata,
    layout: "/admin",
  },
  {
    path: "/GeneralInformationDataEdit",
    component: GeneralInformationDataEdit,
    layout: "/admin",
  },
  {
    path: "/AcademicsDataEdit",
    component: AcademicsDataEdit,
    layout: "/admin",
  },

  {
    path: "/signin",
    component: SignIn,
    layout: "/auth",
  },
];
export default NdashRoutes;
