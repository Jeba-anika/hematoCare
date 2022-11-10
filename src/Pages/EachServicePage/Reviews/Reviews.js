import { Avatar, Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Reviews = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, resetField } = useForm();
    const [allReviews, setAllReviews] = useState([]);


    const handleReview = (data) => {
        console.log(data)
        const review = {
            uid : user.uid,
            review: data.review,
            userName: data.name,
            userEmail: user.email,
            serviceId: service._id,
            serviceName: service.name,
            rating: data.rating,
            userPhoto : user?.photoURl ? user?.photoURl : "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png"

        }
        console.log(review)


        fetch('https://hemato-care-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Added Successfully');
                    resetField('review');
                    resetField('name');
                    resetField('rating')
                }
            })

    }

    useEffect(()=>{
        fetch(`https://hemato-care-server.vercel.app/reviews/${service._id}`)
        .then(res => res.json())
        .then(data => {
            setAllReviews(data)
        })
    },[allReviews])

    return (
        <div>
            <div>
                {
                    allReviews.map(data => <div className='border rounded-xl p-8 mb-4'>
                        <div className='flex flex-row'>
                            <div>
                                <Avatar img={data.userPhoto} rounded={true}></Avatar>
                            </div>
                            <div className='text-start ml-10'>
                                <p className='text-xl font-serif font-bold'>{data.userName}</p>
                                <p></p>
                                <p>{data.userEmail}</p>
                                <p className='font-bold'><span className='text-slate-700'>Rating Given:</span> <span className='text-green-400'>{data.rating}</span></p>
                                <p className='pt-4 font-mono font-bold text-xl text-slate-700'>Comment: {data.review}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {
                user?.email ? <form onSubmit={handleSubmit(handleReview)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            {...register('name')}
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required={true}
                        />
                    </div>
                    <div id="select">
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="rating"
                                value="Rate the service"
                            />
                        </div>
                        <Select
                            {...register('rating')}
                            id="rating"
                            required={true}
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Select>
                    </div>
                    <div id="textarea">
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="review"
                                value="Your message"
                            />
                        </div>
                        <Textarea
                            {...register('review')}
                            id="review"
                            placeholder="Leave a review..."
                            required={true}
                            rows={4}
                        />
                    </div>

                    <Button type="submit">
                        Submit
                    </Button>
                </form> :
                <Button color='failure'>
                    <Link to='/login'>Please Login to write a review</Link>
                </Button>
            }
        </div>
    );
};

export default Reviews;