import { motion } from 'motion/react';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-blue-100 max-w-7xl mx-auto py-8'>
            <section className='lg:flex justify-between'>
                <div className='p-4 lg:p-8'>
                  <h1 className='text-3xl lg:text-5xl font-bold'>The <span className='text-blue-600'>Easiest Way </span>
                   to Get Your New Job</h1>
                   <p className='font-semibold my-4 text-lg text-gray-700'>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>
 <div className='rounded-lg my-6'>
  <div className="join shadow-md border-none">
  <select className="select join-item">
    <option disabled selected>Industry</option>
    <option>Sci-fi</option>
    <option>Drama</option>
    <option>Action</option>
  </select>
  <div>
<input className="input join-item" placeholder="Your Keyboard" />
    </div>
  <div className="join">
    <button className="btn bg-blue-600 text-white">Search</button>
  </div>
</div>
</div>
<p><span className='font-semibold text-gray-600'>Populer Searches: </span>Designer,web,IOS,Developer,PHP,Senior,Engineer</p>
</div>
<div className='p-4'>
<motion.img className='w-2/3 h-[260px] rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600 ' src="https://img.freepik.com/free-photo/businesspeople-working-as-team_1098-803.jpg?t=st=1734022906~exp=1734026506~hmac=6b764962dc95c390bfd8d1a41dacfed9724e640e0d0a1e7445591ea5545b9a80&w=996" 
animate={{y: [50,100,50]}}
transition={{duration: 5, repeat:Infinity}}
alt="" />
<motion.img className='w-2/3 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-blue-600 ' src="https://img.freepik.com/free-photo/corporate-workers-brainstorming-together_23-2148804548.jpg?ga=GA1.1.637505773.1729693215&semt=ais_hybrid" 
animate={{x: [100,150,100]}}
transition={{duration: 10, delay:5 , repeat:Infinity}}
alt="" />
</div>
            </section>
        </div>
    );
};

export default Banner;