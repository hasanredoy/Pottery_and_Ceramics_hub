import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Mangos from './components/Mangos.jsx';
import Mango from './components/Mango.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path: "/mangos",
    element: <Mangos></Mangos>,
    loader:()=>fetch('http://localhost:5000/mangos')
  },
   {
    path: "/mango/:id",
    element: <Mango></Mango>,
    loader:({params})=>fetch(`http://localhost:5000/mangos/${params.id} `)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
