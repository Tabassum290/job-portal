import React, { useEffect, useState } from 'react';
import HotjobCards from './HotjobCards';

const Hotjobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/jobs')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)})
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto'>
{
jobs.map(job =><HotjobCards key={job._id} job={job}></HotjobCards>)
}
        </div>
    );
};

export default Hotjobs;