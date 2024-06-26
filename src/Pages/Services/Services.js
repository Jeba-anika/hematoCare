import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import { TitleChange } from '../../Title/ChangeTitle';

const Services = () => {
    const [loading, setLoading] = useState(true)
    const [allServices, setAllServices] = useState([])

    useEffect(() => {

        fetch('https://hemato-care-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllServices(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            {TitleChange('Services')}
            <div className='bg-slate-700 p-10 mb-28'>
                <p className='text-3xl text-amber-100 font-serif font-bold'>All Services</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-8 h-full gap-10'>
                    {
                        allServices.map(service =>
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
                                    <div className='justify-end'>
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
            </div>
        </div>
    );
};

export default Services;