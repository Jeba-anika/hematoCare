import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TitleChange } from '../../Title/ChangeTitle';

const AddService = () => {
    const { register, handleSubmit, resetField } = useForm();

    const handleAddService = (data) => {
        const { serviceName, servicePictureURL, servicePrice, serviceRating, company, email, phone, time, days, about, address } = data;
        console.log(serviceName, servicePictureURL);
        const service = {
            picture: servicePictureURL,
            price: servicePrice,
            rating: serviceRating,
            time: time,
            days: days,
            name : serviceName,
            company:  company,
            email: email,
            phone: phone,
            address: address,
            about: about
        }

        fetch('https://hemato-care-server.vercel.app/services',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                authorization : `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast('Service Added!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                
                resetField('serviceName')
                resetField('servicePictureURL')
                resetField('servicePrice')
                resetField('serviceRating')
                resetField('company')
                resetField('email')
                resetField('phone')
                resetField('time')
                resetField('days')
                resetField('about')
                resetField('address')
            }
        })
    }

    return (
        <div className='mb-20'>
            {TitleChange('Add Service')}
            <h2 className='text-2xl font-serif font-bold mb-6'>Add a Service</h2>
            <form onSubmit={handleSubmit(handleAddService)} className="flex flex-col gap-4 lg:w-3/4 mx-auto py-8 border rounded-xl">

                <div className='lg:flex lg:flex-row lg:gap-8 w-3/4 mx-auto'>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="serviceName"
                                value="Service Name"
                            />
                        </div>
                        <TextInput
                            {...register('serviceName')}
                            id="serviceName"
                            type="text"
                            placeholder="Type ur service Name"
                            required={true}
                        />
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="servicePictureURL"
                                value="Service Photo URL"
                            />
                        </div>
                        <TextInput
                            {...register('servicePictureURL')}
                            id="servicePictureURL"
                            type="text"
                            placeholder="Type ur service Photo URL"
                            required={true}
                        />
                    </div>
                </div>


                <div className='lg:flex lg:flex-row lg:gap-8 w-3/4 mx-auto'>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="servicePrice"
                                value="Service Price"
                            />
                        </div>
                        <TextInput
                            {...register('servicePrice')}
                            id="servicePrice"
                            type="number"
                            placeholder="Type ur service Price"
                            required={true}
                        />
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="serviceRating"
                                value="Service Rating"
                            />
                        </div>
                        <TextInput
                            {...register('serviceRating')}
                            id="serviceRating"
                            type="number"
                            placeholder="Type ur service Rating"
                            required={true}
                        />
                    </div>
                </div>

                <div className='lg:flex lg:flex-row lg:gap-8 w-3/4 mx-auto'>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="company"
                                value="Company"
                            />
                        </div>
                        <TextInput

                            {...register('company')}
                            id="company"
                            type="text"
                            placeholder="Your in which company you provide your service"
                            required={true}
                        />
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="address"
                                value="Company Address"
                            />
                        </div>
                        <TextInput

                            {...register('companyAddress')}
                            id="address"
                            type="text"
                            placeholder="Your company address"
                            required={true}
                        />
                    </div>
                </div>

                <div className='lg:flex lg:flex-row lg:gap-8 w-3/4 mx-auto'>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="email"
                                value="Your Email"
                            />
                        </div>
                        <TextInput
                            {...register('email')}
                            id="email"
                            type="email"
                            placeholder='Your Email'
                            required={true}
                        />
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="phone"
                                value="Your Phone"
                            />
                        </div>
                        <TextInput
                            {...register('phone')}
                            id="phone"
                            type="number"
                            placeholder='Your Phone'
                            required={true}
                        />
                    </div>
                </div>


                <div className='lg:flex lg:flex-row lg:gap-8 w-3/4 mx-auto'>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="time"
                                value="Service Time"
                            />
                        </div>
                        <TextInput
                            {...register('time')}
                            id="time"
                            type="text"
                            placeholder='Type your service giving time per day'
                            required={true}
                        />
                    </div>
                    <div className='lg:w-1/2 lg:mx-auto md:mx-auto'>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="days"
                                value="Service Days"
                            />
                        </div>
                        <TextInput
                            {...register('days')}
                            id="days"
                            type="number"
                            placeholder='Type how many days u provide this service'
                            required={true}
                        />
                    </div>
                </div>
                <div className=' w-3/4 mx-auto'>
                    <div id="textarea">
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="about"
                                value="Service Details"
                            />
                        </div>
                        <Textarea
                            {...register('about')}
                            id="about"
                            placeholder="Type Details about your Service.."
                            required={true}
                            rows={4}
                        />
                    </div>
                </div>



                <Button className='w-3/4 lg:w-1/2 lg:mx-auto md:w-1/2 mx-auto ' color='failure' pill={true} type="submit">
                    Add Service
                </Button>
            </form>
        </div>
    );
};

export default AddService;