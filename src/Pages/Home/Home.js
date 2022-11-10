import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import doctor from '../../assets/doctor.png'
import './Home.css'
import { BsArrowRight } from "react-icons/bs";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Helmet } from 'react-helmet-async';
import { TitleChange } from '../../Title/ChangeTitle';
import doctorUndraw from '../../assets/undraw_doctor_kw-5-l.svg'
import wallet from '../../assets/undraw_credit_card_re_blml.svg'
import rating from '../../assets/undraw_reviews_lp8w.svg'
import { Controls, Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
    const services = useLoaderData();

    return (
        <div className='lg:mr-5 lg:ml-5 '>
            {TitleChange('Home')}
            <div className='bg-amber-100 flex flex-col lg:flex-row md:flex-row gap-4 p-10 rounded-t-xl'>
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

            <div className='bg-slate-700 p-10  pt-20'>
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



            {/* ----------------another section--------------- */}
            <div className=' py-28 w-full px-32 mx-auto bg-slate-100'>
                <p className='text-3xl text-slate-800 font-serif font-bold mb-4'>Features</p>
                <div className='flex lg:flex-row md:flex-row flex-col gap-6 w-full'>
                    <div className='flex lg:flex-row border gap-8 rounded-xl lg:py-10 md:py-10 md:px-4 py-4 px-2 lg:px-4 bg-teal-400 align-items-center lg:w-1/3 md:w-1/3 w-full'>
                        <div className='lg:w-1/4'>
                            <img src={doctorUndraw} alt="" />
                        </div>
                        <div className=' lg:w-3/4'>
                            <h2 className='text-2xl font-serif font-bold text-white text-start'>Get World Class Treatment</h2>


                        </div>
                    </div>
                    <div className='flex lg:flex-row border gap-8 rounded-xl lg:py-10 md:py-10 md:px-4 py-4 px-2 lg:px-4  align-items-center lg:w-1/3 md:w-1/3 w-full bg-red-400'>
                        <div className='w-1/4'>
                            <img src={wallet} alt="" />
                        </div>
                        <div className=' w-3/4'>
                            <h2 className='text-2xl font-mono font-bold text-white text-start'>Get Services at cheapest Rate.</h2>


                        </div>
                    </div>
                    <div className='flex lg:flex-row border gap-8 rounded-xl lg:py-10 md:py-10 md:px-4 py-4 px-2 lg:px-4  align-items-center lg:w-1/3 md:w-1/3 w-full bg-cyan-500'>
                        <div className='w-1/4'>
                            <img src={rating} alt="" />
                        </div>
                        <div className=' w-3/4'>
                            <h2 className='text-2xl font-mono font-bold text-white text-start'>Get Top Rated Treatment</h2>


                        </div>
                    </div>
                </div>

            </div>

            {/* ---------------------another section--------------- */}
            <div className=' w-full bg-yellow-50 rounded-b-xl'>
                <div className='flex lg:flex-row md:flex-row flex-col gap-8 w-1/2 mx-auto align-items-center py-8'>
                    <div className='w-1/2'>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_i6ortcr1.json"
                            style={{ height: '300px', width: '300px' }}
                        >
                            <Controls visible={false} />
                        </Player>

                    </div>
                    <div className='lg:w-1/2'>
                        <h2 className='text-4xl font-bold text-start lg:py-8'>Subscribe to our <span className='text-orange-400'>Newsletter</span> to get Update on Services.</h2>
                        <form className="flex lg:flex-row gap-0 align-items-center">
                            <div>
                                <TextInput
                                    id="email1"
                                    type="email"
                                    placeholder="Your Email"
                                    required={true}
                                />
                            </div>
                            <Button type="submit" color='warning'>
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;