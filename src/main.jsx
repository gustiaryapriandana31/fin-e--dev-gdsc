import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateDonutData from './components/ownerComponents/CreateDonutData.jsx';
import ReadDonutData from './components/ownerComponents/ReadDonutData.jsx';
import UpdateDonutData from './components/ownerComponents/UpdateDonutData.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/create',
    element: <CreateDonutData/>
  }, 
  {
    path: 'read',
    element: <ReadDonutData/>
  }, 
  {
    path: 'edit/:donutId',
    element: <UpdateDonutData/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)

export default Router;
