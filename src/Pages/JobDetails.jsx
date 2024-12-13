import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MdDriveFileRenameOutline, MdOutlineBusinessCenter, MdOutlineMarkEmailUnread, MdOutlineVerified } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { LuBuilding2, LuCalendarClock } from 'react-icons/lu';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TfiCup } from 'react-icons/tfi';
import { CiLocationOn } from 'react-icons/ci';
import { FaTableList } from 'react-icons/fa6';

const JobDetails = () => {
const {_id,applicationDeadline,category,company,company_logo,description,hr_email,hr_name,jobType,location,title,status ,requirements,salaryRange } = useLoaderData();

    return (
        <div>
            <Navbar/>
           <section className='max-w-7xl mx-auto p-8'>
            <div className='mb-6'>
                <img className='rounded-lg w-full h-[400px]' src="https://img.freepik.com/free-photo/celebrating-successful-deal-young-office-workers-sitting-near-table-with-alcohol_146671-13634.jpg?ga=GA1.1.637505773.1729693215&semt=ais_hybrid" alt="" />
            </div>
<div className='lg:flex justify-between'>
<div>
             <h1 className='text-4xl font-bold mb-4'>{title}</h1>
             <div className='flex gap-6 text-gray-400 font-semibold'>
        <p className='flex gap-1 items-center'><MdOutlineBusinessCenter />{jobType}</p>
        <p className='flex gap-1 items-center'><FaRegClock />{status}</p>
    </div>
</div>
<div>
<button className="btn btn-lg text-white bg-blue-700 hover:bg-blue-950 px-8 my-6 lg:my-0"><MdOutlineVerified />Apply Now</button>
</div>
</div>
<hr className='my-6'></hr>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className='col-span-2 border-2 rounded-lg p-4'>
        <h1 className='text-3xl font-bold mb-4'>Employment Information</h1>
        <hr></hr>
       
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 my-6'>
        <div>
        <p className='text-xl text-gray-500 flex gap-1 items-center'><span className='px-4'><LuBuilding2 /></span>Industry<span className='text-black px-8'>{company}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span className='px-4'><RiMoneyDollarCircleLine /></span>Salary<span className='text-black px-8'>${salaryRange.min}-${salaryRange.max}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span className='px-4'><TfiCup /></span>Job type<span className='text-black px-8'>{jobType}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span className='px-4'><LuCalendarClock /></span>Deadline<span className='text-black px-8'>{applicationDeadline}</span></p>
        </div>
        <div>
        <p className='text-xl text-gray-500 flex gap-1 items-center'><span className='px-4'><FaTableList /></span>Category<span className='text-black px-8'>{category}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span className='px-4'><CiLocationOn /></span>Location<span className='text-black px-8'>{location}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span className='px-4'><MdDriveFileRenameOutline /></span>Hr Name<span className='text-black px-8'>{hr_name}</span></p>
           <p className='text-xl text-gray-500 flex gap-1 items-center my-8'><span><MdOutlineMarkEmailUnread/></span>Hr Email<span className='text-black px-8'>{hr_email}</span></p>
        </div>
</div>
</div>
<div className='my-5 col-span-2'>
<hr className='my-4'></hr>
    <h1 className='text-3xl font-bold mb-4 text-gray-600'>Welcome to AliStudio Team</h1>
    <p className='text-lg text-gray-500 font-semibold'>The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
    <p className='text-lg text-gray-500 font-semibold'>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
</div>
<div className='my-5 col-span-2'>
    <h1 className='text-3xl font-bold mb-4 text-gray-600'>Essential Knowledge, Skills, and Experience</h1>
    <p className='text-lg text-gray-500 font-semibold'>A portfolio demonstrating well thought through and polished end to end customer journeys
5+ years of industry experience in interactive design and / or visual design
Excellent interpersonal skills
Aware of trends inmobile, communications, and collaboration
Ability to create highly polished design prototypes, mockups, and other communication artifacts
The ability to scope and estimate efforts accurately and prioritize tasks and goals independently
History of impacting shipping products with your work
A Bachelor's Degree in Design (or related field) or equivalent professional experience
Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</p>
    <p className='text-lg text-gray-500 font-semibold'>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
</div>
</div>
<div className='flex gap-6 my-4'>
<button className="btn btn-lg text-white bg-blue-700 hover:bg-blue-950">Apply Now</button>
<button className="btn btn-lg text-gray-600 btn-outline hover:bg-blue-950">Save Job</button>
</div>

           </section>
            <Footer/>
        </div>
    );
};

export default JobDetails;