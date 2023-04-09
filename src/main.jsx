import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Blog from './component/Blog';
import FirstPage from "./component/FirstPage";
import JobDetails from "./component/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("fakeJobsData.json"),
    children: [
      {
        path: "/",
        element: <FirstPage></FirstPage>,
      },
      {
        path: "/statistics",
        element: <div>this is statistics component details</div>,
      },
      {
        path: "/jobapplied",
        element: <div>this is jobs applied component details</div>,
      },
      {
        path: "/:id",
        loader: ({ params }) => params.id,
        element: <JobDetails></JobDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
