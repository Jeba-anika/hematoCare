import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { TitleChange } from '../../Title/ChangeTitle';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Table } from 'flowbite-react';
import ReviewTableRow from './ReviewTableRow/ReviewTableRow';
import { toast } from 'react-toastify';

const MyReviewsPage = () => {
    const { user, logOut } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);


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
                setAllReviews(data)
            })
    }, [allReviews, logOut, user.email, user.uid])


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
                    toast('Review Updated!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
                if (data.modifiedCount > 0) {
                    const modified = allReviews.find(review => review._id === rev._id)
                    const remaining = allReviews.filter(review => review._id !== rev._id)
                    const updatedAllReviews = [...remaining, modified];
                    setAllReviews(updatedAllReviews)
                }
            })

    }


    const handleDeleteReview = (rev) => {
        console.log(rev)
        const proceed = window.confirm('Are you sure you want to delete this review?')
        if (proceed) {
            fetch(`https://hemato-care-server.vercel.app/review/${rev.serviceId}?email=${user.email}`,
                {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast('Deleted Successfully!!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }
                })
        }
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
                {
                    allReviews.length === 0 ?
                        <div>
                            <p className='mb-20 mt-4 text-xl font-serif'>No reviews to show. Please add some reviews.</p>
                        </div>
                        :
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
                                        allReviews.map(rev => <ReviewTableRow key={rev._id} rev={rev} handleUpdateReview={handleUpdateReview} handleDeleteReview={handleDeleteReview}></ReviewTableRow>)
                                    }
                                </Table.Body>
                            </Table>
                        </div>

                }
            </div>
        </div>
    );
};

export default MyReviewsPage;