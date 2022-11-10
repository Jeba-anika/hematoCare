import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="text-center mb-20">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if (user && user.uid) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;