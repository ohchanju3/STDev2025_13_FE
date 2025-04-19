import Intro from "@pages/Login/Intro";
import Login from "@pages/Login/LoginPage";
import MainPage from "@pages/main/Mainpage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "src/layout/DefaultLayout";
import QcardPage from "@pages/Qcard/Qcard";

//layouts

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      { path: "/", element: <Intro /> },
      { path: "login", element: <Login /> },
      { path: "main", element: <MainPage /> },
      { path: "qcard", element: <QcardPage /> },
    ],
  },
]);

export default router;
