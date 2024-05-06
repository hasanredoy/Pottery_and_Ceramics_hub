import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layouts/Layout.jsx';
import Home from './pages/home/Home.jsx';
import DetailsOfCraftItem from './components/craftItems/DetailsOfCraftItem.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import AuthProvider from './components/authProvider/AuthProvider.jsx';
import Subcategorys from './components/subcategorys/Subcategorys.jsx';

import AddArtAndCraft from './pages/addArtAndCraft/AddArtAndCraft.jsx';
import AllCategory from './pages/allCategoryPage/AllCategory.jsx';
import Update from './pages/update/Update.jsx';
import DetailsOfAllCatagory from './pages/allCategoryPage/DetailsOfAllCatagory.jsx';

import  MyArtAndCraft  from "./pages/myArtAndCraft/MyArtAndCraft";
import  PrivetRoute  from "./pages/privet/PrivetRoute";
import  Error  from "./pages/error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addArtandCraftItem",
        element:<PrivetRoute><AddArtAndCraft></AddArtAndCraft></PrivetRoute>
      },
      {
        path:"/craftItem/:id",
        element:<DetailsOfCraftItem></DetailsOfCraftItem>,
        loader:({params})=> fetch(`https://pottery-and-ceramics-hub.vercel.app/craftItem/${params.id}`)
      },
      {
        path:"/myArtAndCraftUpdate/:id",
        element:<Update></Update>,
        loader:({params})=> fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft/${params.id}`)
      },
      {
        path:"/allArtAndCraftItems",
        element:<AllCategory></AllCategory>,
        loader:()=> fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft`)
      }
      ,
      {
        path:"/allArtAndCraft/:subcategory",
        element:<Subcategorys></Subcategorys>,
        loader:()=> fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft`)
      }
      ,
      {
        path:"/myArtAndCraftItem",
        element:<PrivetRoute><MyArtAndCraft></MyArtAndCraft></PrivetRoute>,
        loader:({params})=> fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft`)
      }
      ,
      {
        path:"/allArtAndCraftItems/:id",
        element:<PrivetRoute><DetailsOfAllCatagory></DetailsOfAllCatagory></PrivetRoute>,
        loader:({params})=> fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
