import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import doctor from '../../assets/doctor.png'
import './Home.css'
import { BsArrowRight } from "react-icons/bs";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Helmet } from 'react-helmet-async';
import { TitleChange } from '../../Title/ChangeTitle';

const Home = () => {
    const services = useLoaderData();

    return (
        <div>
            {TitleChange('Home')}
            <div className='bg-amber-100 flex flex-col lg:flex-row md:flex-row gap-4 p-10 mb-28'>
                <div className=' w-1/2 my-auto lg:p-12'>
                    <h2 className='text-7xl font-bold lg:px-10 font-mono text-start mx-auto lg:mx-0 text-slate-800'>Dr.Amy Farah Fowler</h2>
                    <p className='text-justify lg:text-start lg:px-10 font-bold p-4 text-red-400'>Hematologist(Blood Specialist)</p>
                    <p className='lg:text-start lg:px-10'>Dr. Amy Farah Fowler is a specialized Hematologist in United Kingdom. And one of the most
                        sought after medical specialists in London, United Kingdom. The doctor has over 10 Years of experience and is associated with Cancer Centre London.</p>
                </div>
                <div className='lg:static my-auto'>
                    <img className='lg:absolute lg:right-40 lg:top-20 img-size' src={doctor} alt="" />
                </div>
            </div>
            <div className='bg-slate-700 p-10 mb-28'>
                <p className='text-3xl text-amber-100 font-serif font-bold'>Services Provided:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 h-full gap-10'>
                    {
                        services.map(service =>
                            <div key={service._id}>
                                <Card >
                                    <PhotoProvider>
                                        <PhotoView src={service.picture}>
                                            <img className='hover:cursor-pointer' src={service.picture} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>

                                    <h5 className="text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {service.name}
                                    </h5>
                                    {
                                        service.about.length < 100 ? <p className=" text-start font-normal text-gray-700 dark:text-gray-400">{service.about}</p>
                                            :
                                            <p className="text-start font-normal text-gray-700 dark:text-gray-400">{service.about.slice(0, 100)}...</p>
                                    }
                                    <div className='flex flex-row justify-between'>
                                        <p>Price: ${service.price}</p>
                                        <p>Rating: {service.rating}</p>
                                    </div>
                                    <div >
                                        <Button

                                            color="success"
                                            pill={true}
                                        >
                                            <Link to={`/services/${service._id}`} className='flex flex-row'> View Details  <BsArrowRight className='font-bold text-xl ml-3'></BsArrowRight></Link>
                                        </Button>
                                    </div>
                                </Card>
                            </div>)
                    }
                </div>
                <div >
                    <Button className='mx-auto ' color="warning">
                        <Link to='/services' className='font-bold text-2xl'>See More</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;