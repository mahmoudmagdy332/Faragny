import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const OnAuthAndPay = ({children}) => {
    const location=useLocation();
    const isLogged=useSelector((state=>state.AuthReducer.isLogged));
    const isPay=useSelector((state=>state.PayReducer.isPay));
     if(isLogged && isPay){
        return <Navigate to='/home' state={{ path:location.pathname }}/>
     }
     return children
}
