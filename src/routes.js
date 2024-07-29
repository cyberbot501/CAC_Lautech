import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing/landing';


export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },


        
    ]);
    return routes;
}