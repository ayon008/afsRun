import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loader, user } = useContext(AuthContext)
    if (loader) {
        return (
            <div>
                loading
            </div>
        )
    }
    if (user) {
        return (
            children
        )
    }
    return <Navigate to={'/signin'}></Navigate>
};

export default PrivateRoute;