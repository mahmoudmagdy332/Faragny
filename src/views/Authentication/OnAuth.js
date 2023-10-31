import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const OnAuth = ({children}) => {
    const location=useLocation();
    const isLogged=useSelector((state=>state.AuthReducer.isLogged));
     if(isLogged){
        return <Navigate to='/home' state={{ path:location.pathname }}/>
     }
     return children
}
