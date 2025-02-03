import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root'
import Home from './main file/Home'
import Listbooks from './header file/Listbooks'
import Readpages from './header file/Readpages'
import Bookdetails from './Book file/Bookdetails'
import Readbooks from './Book file/Readbooks'
import Whislistbooks from './Book file/Whislistbooks'
import Blog from './header file/Blog'
import About from './header file/About'
import Errorpage from './header file/Errorpage'

const router=createBrowserRouter([
  {
     path:'/',
     element:<Root></Root>,
     errorElement:<Errorpage></Errorpage>,
     children:[{
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/listbooks',
      element:<Listbooks></Listbooks>,
      children:[{
        path:'readbooks',
        element:<Readbooks></Readbooks>,
        loader:()=>fetch('/books.json')
      },
    {
      path:'whislist',
      element:<Whislistbooks></Whislistbooks>,
      loader:()=>fetch('/books.json')
    }
    ]
     },
     {
      path:'/readpages',
      element:<Readpages></Readpages>,
      loader:()=>fetch('/books.json')
     },
     {
      path:'/bookdetails/:id',
      element:<Bookdetails></Bookdetails>,
      loader:()=>fetch('/books.json')
     },
     {
      path:'/blog',
      element:<Blog></Blog>
     },
     {
      path:'/about',
      element:<About></About>
     }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
         <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
