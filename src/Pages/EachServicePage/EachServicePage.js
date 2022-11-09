import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TitleChange } from '../../Title/ChangeTitle';
import { FaHospital, FaRegMoneyBillAlt, FaPhoneAlt,FaInfoCircle, FaCommentAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
import { Tabs } from 'flowbite-react';
import Reviews from './Reviews/Reviews';

const EachServicePage = () => {
    const service = useLoaderData()

    return (
        <div className='lg:mr-20 lg:ml-20 mt-20  border rounded-xl mb-20'>
            <div className=' grid lg:grid-cols-3 p-4 mb-20'>
                {TitleChange(service.name.toString())}
                <div className='flex lg:flex-row flex-col md:flex-row gap-8 lg:col-span-2'>
                    <div className='lg:w-1/2'>
                        <img className='rounded' src={service.picture} alt={service.name} />
                    </div>
                    <div className='text-start lg:col-span-1'>
                        <p className='font-bold font-serif text-3xl text-start text-slate-800'>{service.name}</p>
                        <span className='font-bold font-serif text-gray-800 flex flex-row pt-6'><FaHospital className='mr-2 text-red-600'></FaHospital>Location:</span>
                        <p className='font-bold text-slate-700 pt-2'>{service.company}</p>
                        <p className='pt-2 pb-2'> {service.address}.</p>
                        <p className='text-slate-700'>Providing {service.days} days per week from {service.time}.</p>
                    </div>
                </div>
                <div className='lg:px-10 pt-10 md:pt-0 lg:pt-0'>
                    <p className='flex flex-row text-2xl font-serif text-start text-slate-700'><FaRegMoneyBillAlt className='mr-2 text-red-600'></FaRegMoneyBillAlt> Price:    $<span className='text-2xl font-bold mr-2 text-red-600'>{service.price}</span> per appointment.</p>
                    <p className='flex flex-row text-xl font-serif text-start text-slate-700 font-bold pt-6'><GrContact className='mr-2'></GrContact> Contact Information: </p>
                    <p className='flex flex-row text-xl font-serif text-start text-slate-600  pt-2'><AiTwotoneMail className='mr-2'></AiTwotoneMail> Email: {service.email}</p>
                    <p className='flex flex-row text-xl font-serif text-start text-slate-600  pt-2'><FaPhoneAlt className='mr-2'></FaPhoneAlt> Phone: {service.phone}</p>

                </div>
            </div>
            <div>
                <Tabs.Group
                    aria-label="Tabs with icons"
                    style="underline"
                >
                    <Tabs.Item
                        title="About"
                        icon={FaInfoCircle}
                    >
                       <div className='text-start text-xl font-serif'>
                            {service.about}
                        </div> 
                    </Tabs.Item>
                    <Tabs.Item
                        active={true}
                        title="Reviews"
                        icon={FaCommentAlt}
                    >
                        <Reviews service={service}></Reviews>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
};

export default EachServicePage;