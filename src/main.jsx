import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'
import Signin from './Pages/Signin.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/signin',
    element:<Signin/>,
  },
  {
    path:'/register',
    element:<Register/>,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
