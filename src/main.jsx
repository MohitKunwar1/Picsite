import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import About from './Pages/About/About.jsx'
import Error from './Pages/Error/Error.jsx'
import GalleryPages, { fetchData } from './Components/GalleryPage/GalleryPages.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/gallery",
        loader : fetchData,
        element:<Gallery/>
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "*",
        element: <Error/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
