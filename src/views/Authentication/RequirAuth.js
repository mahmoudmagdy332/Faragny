import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase';
import { login } from '../../redux/slices/AuthSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SpinnerPage } from '../SpinnerPage';
 const RequireAuth = ({children}) => {
    const location=useLocation();
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
 
       if(localStorage.getItem('userInfo')!=='nu'){
         setLoading(true);
         try{
         const emailInfo=JSON.parse(localStorage.getItem('userInfo')).email;
         const passwordInfo=JSON.parse(localStorage.getItem('userInfo')).password;
         console.log (passwordInfo)
          signInWithEmailAndPassword(auth,emailInfo,passwordInfo).then(()=>{
          dispatch(login({email:emailInfo,password:passwordInfo}));
          setLoading(false);
          }).catch((e)=>{
           console.log ('erorr')
          })
       }catch(e){
          console.log ('erorr')   
       }
       setLoading(false);
       }
     },[])
    const isLogged=useSelector((state=>state.AuthReducer.isLogged));
    const isPay=useSelector((state=>state.PayReducer.isPay));
    
    console.log(isPay)
     if(!isLogged || !isPay){
        return <Navigate to='/' state={{ path:location.pathname }}/>
     }
     return loading?<SpinnerPage/>:children;
   
} 
export default RequireAuth;
