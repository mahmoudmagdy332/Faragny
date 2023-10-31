import React, { useState } from 'react'
import Styles from '../../../public/css/mainScreen.module.css'
import logo_we from '../../../public/Images/We_logo.svg'
import logo_vodafone from '../../../public/Images/vodafone-icon.svg'
import logo_etisalat from '../../../public/Images/etisalat-1.svg'
import logo_orange from '../../../public/Images/orange-3.svg'
import { SubscribeButton } from './SubscribeButton'
import { useDispatch } from 'react-redux'
import { setPayment } from '../../../redux/slices/PaySlice'

const PhoneItem = ({Active,phone}) => {

  return (
    <div className={Styles.PhoneItem} style={{ borderColor:Active&&'#e3e308' }}>
         <div className={`${Styles.check_circle} ${Styles.check_circle_phone}`} style={{ backgroundColor:Active&&'#e3e308' }}>
         <i className={`fa fa-check ${Styles.icon}`} aria-hidden="true"></i>
         </div>
         <div className={Styles.PhoneCompany} >
              <img src={phone.logo} alt='we' width={50}  height={50}/>
               <p >{phone.text}</p>
         </div>
    </div>
  )
}
const Phone = () => {
  const [isActive,setIsActive]=useState(1);
  const dispatch=useDispatch();
  const payHandle=(idx)=>{
    setIsActive(idx);
    dispatch(setPayment({num1:3,num2:idx}));
  }

  const phone_companies=[{'logo':logo_we,'text':"المصرية الإتصالات"},
  {'logo':logo_vodafone,'text':"فودافون مصر"},
  {'logo':logo_orange,'text':"اورانج مصر"},
  {'logo':logo_etisalat,'text':"اتصالات مصر"}];
  return (
    <div className='container row gy-3  justify-content-center'>
      {phone_companies.map((phone,idx)=>{
       return(
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex '
                onClick={()=>payHandle(idx+1)} key={idx}>
          <PhoneItem phone={phone}  Active={isActive===idx+1?true:false}/>
          </div>  
       )
      })}
    </div>
  )
}

export default Phone
