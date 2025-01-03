import {useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const ViewApplications = () => {
    const applications = useLoaderData();

    const handleStatusUpdate = (e,id) =>{
const data = {
    status : e.target.value
}
fetch(`http://localhost:4000/job-application/${id}`,{
method:'PATCH',
headers:{
    'content-type' : 'application/json'
},
body : JSON.stringify(data)
})
.then(res=> res.json())
.then(data=>{
    console.log(data)
})
    }
    return (
        <div>
            <Navbar/>
            <h1 className="text-3xl font-bold text-center my-8">View Applications</h1>
            <div className="overflow-x-auto max-w-7xl mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Applicant Email</th>
        <th>Linkedin Profile</th>
        <th>Github Profile</th>
        <th>Resume</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        applications.map((application,index)=> <tr>
            <th>{index+1}</th>
            <td>{application.applicant_email}</td>
            <td>{application.linkedin}</td>
            <td>{application.github}</td>
            <td>{application.resume}</td>
            <td>
            <select onChange={(e)=>handleStatusUpdate(e,application._id)} defaultValue={application.status || 'Change Status'} className="select select-bordered select-xs w-full max-w-xs">
  <option disabled>Change Status</option>
  <option>Under Review</option>
  <option>Set Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
</td>
</tr>)
     }
      
    </tbody>
  </table>
</div>
            <Footer/>
        </div>
    );
};

export default ViewApplications;