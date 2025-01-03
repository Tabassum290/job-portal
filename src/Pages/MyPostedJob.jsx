import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
    const [jobs,setJobs] = useState([]);
    const {user} = UseAuth();
    useEffect(()=>{
        fetch(`http://localhost:4000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
        })
    },[])
    return (
        <div>
            <Navbar/>
            <h1 className='text-3xl font-bold text-center my-8'>My Posted Job : {jobs.length}</h1>
            <div className="overflow-x-auto max-w-7xl mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Company</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>View Application</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job,index)=> <tr>
            <th>{index+1}</th>
            <td>{job.title}</td>
            <td>{job.company}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td>
                <Link to={`/viewapplications/${job._id}`} className='btn btn-link'>View    Applications</Link>
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

export default MyPostedJob;