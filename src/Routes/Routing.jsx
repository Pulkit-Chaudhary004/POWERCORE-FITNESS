import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from '../Components/Home';
import Franchise from "../Components/Franchise";
import cardio1 from "../assets/cardio1.webp";
import cardio2 from "../assets/cardio2.jpeg";
import cardio3 from "../assets/cardio3.jpg";
import TrainWithUs from "../Components/TrainWithUs/TrainWithUs"

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, //NAVBAR + OUTLET
      children: [
        {
          index:true,
          element: (
            <Home
              gymName="POWERCORE FITNESS"
              imgComp1={cardio1}
              imgComp2={cardio2}
              imgComp3={cardio3}
            />
          ),
        },

        {
          path: "franchise",
          element: <Franchise />,
        },
        {
          path: "train-with-us",
          element: <TrainWithUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
