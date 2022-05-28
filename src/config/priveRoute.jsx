import React, { useContext } from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import AuthContext from '../context/authContext';

const PriveRoute = () => {

    const {user} = useContext(AuthContext);

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PriveRoute
