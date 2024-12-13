import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Register from './Pages/Register.jsx'
import Signin from './Pages/Signin.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Provider/AuthProvider.jsx'
import JobDetails from './Pages/JobDetails.jsx'
import PrivateRoute from './Private/PrivateRoute.jsx'
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
  {
    path:'/jobs/:id',
    element:<JobDetails/>,
    loader:({params})=>fetch(`http://localhost:4000/jobs/${params.id}`)
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer/>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
