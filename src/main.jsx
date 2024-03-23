import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root';
import Home from './components/home/Home';
import Applied from './components/AppliedJob/Applied';
import Blogs from './components/Blog/Blogs';
import JObDetails from './components/job Details/JObDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/jobs',
        element: <Applied></Applied>,
        loader: ()=>fetch('/jobs.json')
      },
      {
        path: '/Blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JObDetails></JObDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
