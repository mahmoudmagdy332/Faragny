import React from 'react'
import { Link, NavLink, Outlet, useLocation} from "react-router-dom";
import Styles from '../../../public/css/mainScreen.module.css'
import { SubscribeButton } from './SubscribeButton';
import { useSelector } from 'react-redux';


const Payment = () => {
  const logged=useSelector((state)=>state.AuthReducer.isLogged);
  const location=useLocation();
  const navLinkStyles=({isActive})=>{ 
     if(isActive){
      return {
        backgroundColor: isActive&& 'white',
        color: isActive&& 'black',
      }
     }
  }
  return (
    <div style={{ backgroundColor:"#050b10", padding:"50px 0",minHeight:"100vh"}}>
    <div className='container ' >
            <h3 className='text-center text-white mt-5 mb-5 fs-3'>باقات الإشتراك</h3>
            <ul className='nav  mt-5 mb-5 row g-0 text-center d-flex  justify-content-center'>
                <li className='nav-item  col-5 col-md-3 col-lg-2 me-1 ms-1 mt-2'>
                  <NavLink className={Styles.non_active} style={navLinkStyles} to=''
                  >أساسية بإعلانات 
                  </NavLink></li>
                <li className='nav-item  col-5 col-md-3 col-lg-2 me-1 ms-1 mt-2'><NavLink  className={Styles.non_active} style={navLinkStyles}   to='non-ads/'>  بدون إعلانات</NavLink></li>
                <li className='nav-item col-6  col-md-3 col-lg-2 me-1 ms-1 mt-2'><NavLink  className={Styles.non_active} style={navLinkStyles}  to='phone/'>شبكات المحمول</NavLink></li>

        </ul> 
        <Outlet/>
    </div>
    <div className='d-flex justify-content-center mt-5'>
     { location.pathname.search('pay')===-1 ?
     <SubscribeButton link={logged?"/customPay":"/signup"} title="اشترك الأن"/>:
     <SubscribeButton link="/customPay" title="التالى"/>}
    </div>
    </div>
   
   
  )
}

export default Payment
