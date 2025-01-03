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
import JobApply from './Pages/JobApply.jsx'
import MyApplication from './Pages/MyApplication.jsx'
import AddJob from './Pages/AddJob.jsx'
import MyPostedJob from './Pages/MyPostedJob.jsx'
import ViewApplications from './Pages/ViewApplications.jsx'
import Update from './Pages/Update.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/jobapply/:id',
    element:<PrivateRoute><JobApply/></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:4000/jobs/${params.id}`)
  },
  {
    path:'/myapply',
    element:<PrivateRoute><MyApplication/></PrivateRoute>,
  },
  {
    path:'/addjob',
    element:<PrivateRoute><AddJob/></PrivateRoute>,
  },
  {
    path:'/mypostedjob',
    element:<PrivateRoute><MyPostedJob/></PrivateRoute>,
  },
  {
    path:'/update',
    element:<PrivateRoute><Update/></PrivateRoute>,
  },
  {
    path:'/viewapplications/:job_id',
    element:<PrivateRoute><ViewApplications/></PrivateRoute>,
    loader:({params}) => fetch(`http://localhost:4000/job-application/jobs/${params.job_id}`)
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
    element:<PrivateRoute><JobDetails/></PrivateRoute>,
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
