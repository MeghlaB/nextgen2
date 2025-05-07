import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Componets/Layout/MainLayout";
import LandingPage from "../Componets/LandingPage/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
    
      children: [
        {
          path: "/",
          element: <LandingPage/>,
         
        },
      ],
    },
  ]);

  export default router