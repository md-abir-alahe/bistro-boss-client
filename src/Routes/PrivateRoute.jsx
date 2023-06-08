import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loacation = useLocation();

    if(loading){
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }

    if(user){
        return children
    }
    return <Navigate to={`/login`} state={{from: loacation}} replace></Navigate>
};

export default PrivateRoute;