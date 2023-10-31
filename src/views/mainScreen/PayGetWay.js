import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsPay } from '../../redux/slices/PaySlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Styles from '../../public/css/mainScreen.module.css'

import PaymentItem from './components/PaymentItem';
import { CardElement } from '@stripe/react-stripe-js';
import firstStep from '../../paymob';

export const PayGetWay = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const pay= useSelector((state)=>state.PayReducer.payment)
    console.log(pay);
    const payHandle=(e)=>{
         e.preventDefault();
          // dispatch(changeIsPay(true));
          // navigate('/home')
         firstStep(pay) ;

    }
    
  return (

    <div style={{ backgroundColor:"#050b10", paddingTop:"100px",minHeight:"100vh"}}>
      <div className={`${Styles.get_Way} container `}>
         <Form className='col-12 col-md-9 col-lg-6  mt-5' style={{padding:'20px',borderRadius:'5px'}}>
  
          <button className='btn btn-danger w-100 ' onClick={payHandle} type='submit'>التالى</button>         
          </Form>
         
          <PaymentItem   TV={pay.TV} YM={pay.month?"شهرى":"سنوى"} priceBefore={pay.priceBefore} priceAfter={pay.priceAfter} ST={true}/>
          <div className='d-flex align-items-center justify-content-between mb-3'>
          <p style={{ color:'white',margin:'20px 10px' }}>{pay.ads?"بأعلانات":"بدون اعلانات"}</p> 
          <Link to='/pay' className='btn btn-warning'>تغير</Link>
            </div>
      </div>
   </div>
   
  )
}
