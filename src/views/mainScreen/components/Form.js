import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../configeration/slice/userSlicer';

const Form = () => {
   const[name,setName]=useState('');
   const[email,setEmail]=useState('');
   const dispatch=useDispatch();
   const UserHandeler=()=>{
        dispatch(addUser({name,email}))
   }
  return (
    <>
        <input type='text'  onChange={(e)=>setName(e.currentTarget.value)}/>
        <input type='text' onChange={(e)=>setEmail(e.currentTarget.value)}/>
        <input type='submit' value="submit" onClick={UserHandeler} />
    </>
  )
}

export default Form
