import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import layouts
// import FormReviewer from './components/layouts/FormReviewer.jsx';
import NotFoundPage from './components/layouts/NotFound.jsx';

// import pages
import CreateDonutData from "./components/pages/owner/CreateDonutData";
import ReadDonutData from './components/pages/owner/ReadDonutData';
import UpdateDonutData from "./components/pages/owner/UpdateDonutData";
// import ReadReviewReviewer from "./components/pages/owner/ReadReviewReviewer.jsx";
import WelcomeOwner from './components/pages/owner/WelcomeOwner.jsx';
import TransactionOrders from "./components/pages/owner/TransactionOrders.jsx";
import Reviews from './components/pages/Reviews.jsx';
import Donuts from './components/pages/Donuts';
import DashboardOwner from './components/pages/DashboardOwner.jsx';
import Transactions from './components/pages/Transactions.jsx';


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
    element: <Reviews />,
  },
  {
    path: "/transaction",
    element: <Transactions />,
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
        path: "formcreate",
        element: <CreateDonutData />,
      },
      {
        path: "donuts",
        element: <ReadDonutData />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "transactions",
        element: <TransactionOrders />,
      },
    ],
  },
  {
    path: "edit/:donutId",
    element: <UpdateDonutData />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)

export default Router;
