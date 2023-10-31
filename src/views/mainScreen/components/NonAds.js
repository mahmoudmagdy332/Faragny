import React, { useEffect, useState } from 'react'
import PaymentChoise from './PaymentChoise'
import PaymentItem from './PaymentItem';
import { useDispatch } from 'react-redux';
import { setPayment } from '../../../redux/slices/PaySlice';

const NonAds = () => {
  const [checked,setChecked]=useState(false);
  const [active,setActive]=useState(0);
  const pays={year:[
    {TV:1,priceBefore:"99EGP",priceAfter:"75.99EGP"},
    {TV:2,priceBefore:"120EGP",priceAfter:"99.99EGP"},
    {TV:3,priceBefore:"150EGP",priceAfter:"119.99EGP"}
    ],month:[
    {TV:1,priceBefore:"50EGP",priceAfter:"14.99EGP"},
    {TV:2,priceBefore:"80EGP",priceAfter:"25.99EGP"},
    {TV:3,priceBefore:"120EGP",priceAfter:"40.99EGP"}
    ]}
  const handleChange=()=>{
    setChecked(!checked);
    setActive(0);
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    if (checked){
      dispatch(setPayment({
        tv:pays.month[active].TV,
        priceBefore:pays.month[active].priceBefore,
        priceAfter:pays.month[active].priceAfter,
        month:true,
        ads:false
      }))
     }else{
      dispatch(setPayment({
        tv:pays.year[active].TV,
        priceBefore:pays.year[active].priceBefore,
        priceAfter:pays.year[active].priceAfter,
        month:false,
        ads:false
      }))
     }
  },[checked,active])
      let dom;
        if(!checked){
            dom= (
            <div className='row mt-3 gap-3 justify-content-center'>
             {pays.year.map((item,idx)=>(
                <PaymentItem key={idx}  TV={item.TV} YM="سنوى" priceBefore={item.priceBefore} priceAfter={item.priceAfter} activeHandle={()=>setActive(idx)}ST={active===idx?true:false}/>
             ))}   
            </div>
            )
        }
        else{
          dom= (
            <div className='row mt-3 gap-3 justify-content-center'>
            {pays.month.map((item,idx)=>(
                <PaymentItem key={idx}  TV={item.TV} YM="شهرى" priceBefore={item.priceBefore} priceAfter={item.priceAfter} activeHandle={()=>setActive(idx)}ST={active===idx?true:false}/>
              ))}   
         </div>
       )
        }
        return(
          <>
          <PaymentChoise Select={handleChange} check={checked} />
           {dom}
          </>
        )
}

export default NonAds
