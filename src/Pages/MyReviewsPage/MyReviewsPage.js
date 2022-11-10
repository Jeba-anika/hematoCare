import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { TitleChange } from '../../Title/ChangeTitle';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Button, Label, Modal, Select, Table, Textarea, TextInput } from 'flowbite-react';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import ReviewTableRow from './ReviewTableRow/ReviewTableRow';

const MyReviewsPage = () => {
    const { user, logOut } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, resetField } = useForm();



    useEffect(() => {
        fetch(`https://hemato-care-server.vercel.app/userreviews/${user.uid}?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setAllReviews(data)
            })
    }, [user?.uid, user?.email, logOut, allReviews])


    const handleUpdateReview = (event, rev) => {
        console.log(event, rev)

        const rating = event.rating;
        const review = event.review;
        const update = {
            rating: rating,
            review: review
        }

        fetch(`https://hemato-care-server.vercel.app/reviews/${rev.serviceId}?email=${user.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Updated')
                }
                if (data.modifiedCount > 0) {
                    const modified = allReviews.find(review => review._id === rev._id)
                    const remaining = allReviews.filter(review => review._id !== rev._id)
                    const updatedAllReviews = [...remaining, modified];
                    setAllReviews(updatedAllReviews)
                }
            })
    }


    return (
        <div>
            {TitleChange('My Reviews')}
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/datafiles/jUSr4BI2LbD9guq/data.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} />
                </Player>
                <div className='lg:w-3/4 mx-auto mb-20'>
                    <h2 className='text-3xl font-serif font-bold text-red-400 mb-6'>See All Your Reviews</h2>
                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell>
                                Service name
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Review
                            </Table.HeadCell>
                            <Table.HeadCell>
                                Rating
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">
                                    Edit
                                </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            {
                                allReviews.map(rev => <ReviewTableRow rev={rev} handleUpdateReview={handleUpdateReview}></ReviewTableRow>
                                    )
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsPage;