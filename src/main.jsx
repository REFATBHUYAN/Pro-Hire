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
import AppliedJob from "./component/AppliedJob";
import Statistics from "./component/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("fakeJobsData.json"),
    children: [
      {
        path: "/",
        loader: () => fetch("featuresJob.json"),
        element: <FirstPage></FirstPage>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobapplied",
        element: <AppliedJob></AppliedJob>,
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
