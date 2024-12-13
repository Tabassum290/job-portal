import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Hotjobs from '../Components/Hotjobs';

const Home = () => {
    return (
        <div >
            <Navbar/>
            <main className='mx-auto bg-blue-100'>
                <Banner/>
            </main>
            <Category/>
            <Hotjobs/>
            <Footer/>
        </div>
    );
};

export default Home;