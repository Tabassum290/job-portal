import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import UseAxiosSecure from "../Provider/UseAxiosSecure";

const MyApplication = () => {
    const {user} = UseAuth();
    const [jobs,setJobs] = useState([]);
    const axiosSecure = UseAxiosSecure();

useEffect(()=>{
        // fetch(`http://localhost:4000/job-application?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     setJobs(data)
        // })

// axios.get(`http://localhost:4000/job-application?email=${user.email}`, {withCredentials: true })
// .then(res=>{
//   setJobs(res.data);
// })

axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res => setJobs(res.data))
        .catch(error => {
            console.error("Error fetching jobs:", error);
        });
},[user.email,axiosSecure])

    const handleDelete = (job_id)=>{
      console.log(job_id)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to undo this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:4000/job-applications/${job_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingJobs = jobs.filter((job) => job._id !== job_id);
                setJobs(remainingJobs);
  
                Swal.fire("Deleted!", "Your job application has been deleted.", "success");
              }
            })
            .catch((error) => {
              console.error("Error deleting job:", error);
              Swal.fire("Error", "Failed to delete the job application. Try again later.", "error");
            });
        }
      });
    }
    return (
        <div>
            <Navbar/>
            <div>
            <h2 className="text-3xl text-center font-bold my-8">My Application :{jobs.length}</h2>
         
         <div className="overflow-x-auto max-w-7xl mx-auto">
<table className="table">
 {/* head */}
 <thead>
   <tr>
     <th>
       <label>
         <input type="checkbox" className="checkbox" />
       </label>
     </th>
     <th>Name</th>
     <th>Job</th>
     <th>Company</th>
     <th></th>
   </tr>
 </thead>
 <tbody>
 {
             jobs.map(job=> <tr key={job._id}>
                 <th>
                   <label>
                     <input type="checkbox" className="checkbox" />
                   </label>
                 </th>
                 <td>
                   <div className="flex items-center gap-3">
                     <div className="avatar">
                       <div className="mask mask-squircle h-12 w-12">
                         <img
                           src={job.company_logo}
                           alt="Company Logo" />
                       </div>
                     </div>
                     <div>
                       <div className="font-bold">{job.title}</div>
                       <div className="text-sm opacity-50">{job.location}</div>
                     </div>
                   </div>
                 </td>
                 <td>
                   Zemlak, Daniel and Leannon
                   <br />
                   <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                 </td>
                 <td>{job.company}</td>
                 <th>
                   <button onClick={()=>handleDelete(job._id)} className="btn btn-sm">Delete</button>
                 </th>
               </tr>)
         }

 </tbody>


</table>
</div>
            </div>

            <Footer/>
        </div>
    );
};

export default MyApplication;