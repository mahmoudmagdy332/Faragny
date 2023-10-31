import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, signOut,updateEmail, updatePassword} from "firebase/auth";
import auth from  "../../firebase";
import { login, logout } from '../../redux/slices/AuthSlice';
import { SpinnerPage } from '../SpinnerPage';
const Dashboard = () => {

  const {email}=useSelector((state)=>state.AuthReducer.currentUser);
 



  return (
    <>
    
    <div className='text-center mt-5' >
      <h1>Hello</h1> <p>{email}</p>
    </div>
    </>
   
     
  )
}

export default Dashboard
