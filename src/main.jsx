import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home';
import Blog from './component/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    children:[
      
      {
        path:'/statistics',
        element: <div>this is statistics component details</div>
      },
      {
        path:'/jobs',
        element: <div>this is jobs component details</div>
      },
      {
        path:'/blog',
        element: <Blog></Blog>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
