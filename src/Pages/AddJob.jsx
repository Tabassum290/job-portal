import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { iterate } from 'localforage';
import Swal from 'sweetalert2';
import UseAuth from '../Hooks/UseAuth';

const AddJob = () => {
const {user} = UseAuth();
const handleForm = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData=Object.fromEntries(formData.entries());
    const {min,max,currency, ...newJob} = initialData;
    newJob.salaryRange = {
        min,max,currency
    }
    newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
    newJob.responsibility = newJob.responsibility.split(',').map(res => res.trim());

fetch('http://localhost:4000/jobs',{
method:'POST',
headers:{
    'content-type':'application/json'
},
body: JSON.stringify(newJob)
})
.then(res=>res.json())
  Swal.fire({
        title: "Are you sure?",
        text: "You want to add new job post!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, post it!", 
    })
.then(data=>{
    console.log(data)
    if(data.insertedId){
                       Swal.fire("Your new job application post has been added.", "success");
    }
})
}

    return (
        <div>
            <Navbar/>
            <h1 className="text-3xl font-bold my-6 text-center">Post a new Job</h1>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-2 my-8">
    <form onSubmit={handleForm} className="space-y-4">
      <div>
        <label for="title" className="block font-medium text-gray-700">Title</label>
        <input type="text" name="title" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label for="location" className="block font-medium text-gray-700">Location</label>
        <input type="text" name="location" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label for="jobType" className="block font-medium text-gray-700">Job Type</label>
        <select id="jobType" name="jobType" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
          <option value="On-Site">On-Site</option>
        </select>
      </div>

      <div>
        <label for="category" className="block font-medium text-gray-700">Category</label>
        <input type="text" name="category" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label  className="block font-medium text-gray-700">Application Deadline</label>
        <input type="date" name="applicationDeadline" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
        
        <div>
        <label className="block font-medium text-gray-700">SalaryRange</label>
        <div className="grid grid-cols-3 gap-4">
        <div>
          <input type="number"  name="min" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder='minimum'/>
        </div>
        <div>
          <input type="number" name="max" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder='maximum'/>
        </div>
        <div>
          <select name="currency" className="w-full p-2 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
          <option value="bdt">BDT</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="gbp">GBP</option>
        </select>
        </div>
      </div>
        </div>
      

      <div>
        <label className="block font-medium text-gray-700">Description</label>
        <textarea id="description" name="description" rows="2" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <div>
        <label className="block font-medium text-gray-700">Company</label>
        <input type="text"  name="company" className="w-full border-2 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div>
        <label for="requirements" className="block font-medium text-gray-700">Requirements (comma-separated)</label>
        <input type="text" id="requirements" name="requirements" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., JavaScript, React"/>
      </div>
      <div>
        <label for="responsibilities" className="block font-medium text-gray-700">Responsibilities</label>
        <input type="text" id="responsibilities" name="responsibility" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Develop software, Code reviews"/>
      </div>

      <div>
        <label for="status" className="block font-medium text-gray-700">Status</label>
        <select id="status" name="status" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>


      <div>
        <label for="hr_email" className="block font-medium text-gray-700">HR Email</label>
        <input type="email" id="hr_email" name="hr_email" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>

 
      <div>
        <label for="hr_name" className="block font-medium text-gray-700">HR Name</label>
        <input type="text" id="hr_name" name="hr_name" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>


      <div>
        <label for="company_logo" className="block font-medium text-gray-700">Company Logo URL</label>
        <input type="url" id="company_logo" name="company_logo" className="w-full border-2 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>


      <div className="text-center">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md p-2 shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
      </div>
    </form>
  </div>
            <Footer/>
        </div>
    );
};

export default AddJob;