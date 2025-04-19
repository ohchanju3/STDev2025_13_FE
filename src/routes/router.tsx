import Intro from "@pages/Login/Intro";
import Login from "@pages/Login/LoginPage";
import MainPage from "@pages/main/Mainpage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "src/layout/DefaultLayout";
import QcardPageCreate from "@pages/Qcard/QcardEmotion";
import QcardQnA from "@pages/Qcard/QcardQna";
import QcardText from "@pages/Qcard/QcardText";
import QcardResult from "@pages/Qcard/QcardResult";

//layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      { path: "/", element: <Intro /> },

      { path: "login", element: <Login /> },
      { path: "main", element: <MainPage /> },
      { path: "qcard", element: <QcardPageCreate /> },
      { path: "qcardQna", element: <QcardQnA /> },
      { path: "qcardText", element: <QcardText /> },
      { path: "qcardResult", element: <QcardResult /> },
    ],
  },
]);

export default router;
