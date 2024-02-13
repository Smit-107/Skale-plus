import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Events from "../components/Events/Events";
import MainPage from "../components/Search/MainPage";
import PublicLayout from "../Layout/PublicLayout";
import Pricing from "../components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout renderHeaderFooter>
        <Home />,
      </PublicLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <PublicLayout renderHeaderFooter>
        <About />,
      </PublicLayout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <PublicLayout renderHeaderFooter>
        <Pricing />,
      </PublicLayout>
    ),
  },
  {
    path: "/blogs",
    element: (
      <PublicLayout renderHeaderFooter>
        <Blogs />
      </PublicLayout>
    ),
  },
  {
    path: "/Events",
    element: (
      <PublicLayout renderHeaderFooter>
        <Events />
      </PublicLayout>
    ),
  },
  {
    path: "/search",
    element: (
      <PublicLayout>
        <MainPage />
      </PublicLayout>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
