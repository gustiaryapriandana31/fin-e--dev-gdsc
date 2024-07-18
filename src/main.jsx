import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateDonutData from "./components/ownerComponents/CreateDonutData";
import ReadDonutData from "./components/ownerComponents/ReadDonutData";
import UpdateDonutData from "./components/ownerComponents/UpdateDonutData";
import Donuts from "./components/layouts/Donuts";
import ReadReviewReviewer from "./components/ownerComponents/ReadReviewReviewer.jsx";
import DashboardOwner from "./components/layouts/DashboardOwner.jsx";
import WelcomeOwner from "./components/ownerComponents/WelcomeOwner.jsx";
import Reviews from "./components/layouts/Reviews.jsx";
import FormReviewer from "./components/layouts/FormReviewer.jsx";
import NotFoundPage from "./components/layouts/NotFound.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/donuts",
    element: <Donuts />,
  },
  {
    path: "/reviews",
    element: <FormReviewer />,
  },

  {
    path: "edit/:donutId",
    element: <UpdateDonutData />,
  },
  {
    path: "/dashboard",
    element: (
      <DashboardOwner>
        <WelcomeOwner />
      </DashboardOwner>
    ),
    children: [
      {
        path: "create",
        element: <CreateDonutData />,
      },
      {
        path: "read",
        element: <ReadDonutData />,
      },
      {
        path: "readreview",
        element: <ReadReviewReviewer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

export default Router;
