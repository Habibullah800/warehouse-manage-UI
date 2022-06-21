import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useFirebase from './useFirebase';

const PrivateRoute = () => {
    const location = useLocation();
    const { user, } = useFirebase()


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />

    }
    return <Outlet />;

};

export default PrivateRoute;