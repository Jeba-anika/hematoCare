import React from 'react';
import { useLoaderData } from 'react-router-dom';
import doctor from '../../assets/doctor.png'
import './Home.css'

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='bg-amber-50 flex flex-col lg:flex-row md:flex-row gap-4 p-10 mb-20'>
            <div className=' w-1/2 my-auto lg:p-12'>
                <h2 className='text-7xl font-bold lg:px-10 font-mono text-start mx-auto lg:mx-0 text-slate-800'>Dr.Amy Farah Fowler</h2>
                <p className='text-justify lg:text-start lg:px-10 font-bold p-4 text-red-400'>Hematologist(Blood Specialist)</p>
                <p className='lg:text-start lg:px-10'>Dr. Amy Farah Fowler is a specialized Hematologist in United Kingdom. And one of the most
                 sought after medical specialists in London, United Kingdom. The doctor has over 35 Years of experience and is associated with Cancer Centre London.</p>
            </div>
            <div className='lg:static my-auto'>
                <img className='lg:absolute lg:right-40 lg:top-20 img-size' src={doctor} alt="" />
            </div>
        </div>
    );
};

export default Home;