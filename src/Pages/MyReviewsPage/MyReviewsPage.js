import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { TitleChange } from '../../Title/ChangeTitle';

const MyReviewsPage = () => {
    const {user} = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);


    useEffect(()=>{
        fetch(`https://hemato-care-server.vercel.app/userreviews/${user.uid}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setAllReviews(data)
        })
    },[])


    return (
        <div>
            {TitleChange('My Reviews')}
            <h2>my review: {allReviews.length}</h2>
        </div>
    );
};

export default MyReviewsPage;