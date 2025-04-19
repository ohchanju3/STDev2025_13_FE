import Intro from "@pages/Login/Intro";
import Login from "@pages/Login/LoginPage";
import MainPage from "@pages/main/Mainpage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "src/layout/DefaultLayout";
import QcardPageCreate from "@pages/Qcard/QcardEmotion";
import QcardQnA from "@pages/Qcard/QcardQna";
import QcardText from "@pages/Qcard/QcardText";
import QcardResult from "@pages/Qcard/QcardResult";
import OAuthRedirectHandler from "@pages/Login/OAuthRedirectHandler";
import QcardReportPage from "@pages/QcardReport/QcardReportPage";
import QcardReportDetail from "@pages/QcardReport/QcardReportDetail";
import QcardReportCard from "@pages/QcardReport/QcardReportCard";
import PrivateRoute from "./PrivateRoute";

//layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      { path: "/", element: <Intro /> },
      {
        path: "/api/oauth2/callback/:provider",
        element: <OAuthRedirectHandler />,
      },
      { path: "login", element: <Login /> },

      {
        element: <PrivateRoute />,
        children: [
          { path: "main", element: <MainPage /> },
          { path: "qcard", element: <QcardPageCreate /> },
          { path: "qcardQna", element: <QcardQnA /> },
          { path: "qcardText", element: <QcardText /> },
          { path: "qcardResult", element: <QcardResult /> },
          { path: "qreport", element: <QcardReportPage /> },
          { path: "qreportDetail", element: <QcardReportDetail /> },
          { path: "qreportCard", element: <QcardReportCard /> },
        ],
      },
    ],
  },
]);

export default router;
