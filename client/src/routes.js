import React from 'react';
import { mount, route } from "navi";


import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NewNotePage from "./pages/NewNotePage";

// Define routes using mount(), route(), and other middleware.
const routes = mount({
    "/": route({
        title: "Hats 'n' Flamethrowers 'r' Us",
        view: <HomePage />,
    }),
    "/dashboard": route({
        title: "Hats 'n' Flamethrowers 'r' Us",
        view: <DashboardPage />,
    }),
    "/newnote": route({
        title: "Hats 'n' Flamethrowers 'r' Us",
        view: <NewNotePage />,
    }),
});

export default routes;