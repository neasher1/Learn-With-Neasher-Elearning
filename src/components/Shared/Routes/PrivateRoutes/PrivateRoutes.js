import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LearningAuthContext } from '../../../AuthContext/AuthContext';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {loading , user} = useContext(LearningAuthContext);
    if(loading){
        return <Spinner className='text-center mt-4'animation="border" />
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoutes;