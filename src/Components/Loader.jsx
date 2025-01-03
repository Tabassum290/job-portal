import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center py-64'>
           <div className='bg-gray-200 p-1 rounded-lg'>
           <span className="loading loading-dots loading-lg"></span>
           </div>
        </div>
    );
};

export default Loader;