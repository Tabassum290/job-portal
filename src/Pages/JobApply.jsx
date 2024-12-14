import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams();
    const{title} = useLoaderData();
    const [jobs,setJobs] = useState([]);
    const {user,setUser} = UseAuth();
    const navigate = useNavigate();
    const handleJobApply= e =>{
        e.preventDefault();
       const linkedin = e.target.linkedin.value;
       const github = e.target.github.value;
       const resume = e.target.resume.value;
       const url = {linkedin,github,resume};
console.log(url)

const jobApplication = {
    job_id: id,
    applicant_email : user.email,
     linkedin,github,resume
}

fetch('http://localhost:4000/job-applications',{
method:'POST',
headers:{
    'content-type':'application/json',
},
body:JSON.stringify(jobApplication)
})
.then(res => res.json())
.then(data =>{
    setJobs(data)
    if(data.insertedId){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Application has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/myapply');
    }
})
}


    return (
        <div>
            <Navbar/>
            <h1 className='my-8 text-center text-3xl font-bold'>Apply For :{title}</h1>
            <div className='max-w-xl mx-auto border-2 p-4 rounded-md my-6'>
<form onSubmit={handleJobApply} className='flex flex-col gap-5'>
<span className="label-text font-semibold px-2">Your Linked In URL </span>
<label className="input input-bordered flex items-center gap-2">
  <input type="url" className="grow" name='linkedin' placeholder="Linked In URL" />
</label>
<span className="label-text font-semibold px-2">Your Github URL </span>
<label className="input input-bordered flex items-center gap-2">
  
  <input type="url" className="grow" name='github' placeholder="Github URL" />
</label>
<span className="label-text font-semibold px-2">Your Resume URL </span>
<label className="input input-bordered flex items-center gap-2">
<input type="url" className="grow" name='resume' placeholder="Resume URL" />
</label>
<level className="flex justify-center items-center">
    <input className='btn bg-blue-600 text-white px-8' type="submit" placeholder='Submit' />
</level>
</form>
 </div> 
           <Footer/>
        </div>
    );
};

export default JobApply;