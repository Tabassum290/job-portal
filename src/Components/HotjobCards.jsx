import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HotjobCards = ({job}) => {
    const {_id,applicationDeadline
,category,company,company_logo,description,hr_email,hr_name,jobType,location,title,status ,requirements,salaryRange } = job;
    return (
        <div className='my-8'>
            <div className="card card-compact bg-green-50 shadow-xl p-2 border-2 h-96">
  <div className='flex mt-4'>
    <div><img className='px-4 h-12' src={company_logo} alt="" /></div>
    <div className=''>
        <h1 className='text-xl font-bold'>{company}</h1>
        <p className='flex gap-1 justify-center items-center text-gray-600'><CiLocationOn />{location}</p>
         </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex text-gray-600 font-semibold'>
        <p className='flex gap-1 items-center'><MdOutlineBusinessCenter />{jobType}</p>
        <p className='flex gap-1 items-center'><FaRegClock />{status}</p>
    </div>
    <p>{description}</p>
    <div className='flex gap-2 flex-wrap'>
        {
            requirements.map(skill =><p key={skill._id} className='border-2 rounded-md bg-green-200 p-1 text-center hover:text-blue-700'>{skill}</p>)
        }
    </div>

    <div className="card-actions justify-end flex items-center">
        <p className='text-blue-600 font-bold text-lg'> ${salaryRange.min}{salaryRange.currency}/hour</p>
      <Link to={`/jobs/${_id}`} className="btn bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white">Apply Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HotjobCards;