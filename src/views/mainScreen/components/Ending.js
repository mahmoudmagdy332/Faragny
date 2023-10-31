import React from 'react'
import { SubscribeButton } from './SubscribeButton'
import { BrowseButton } from './BrowseButton'
import Styles from '../../../public/css/mainScreen.module.css'
import { useSelector } from 'react-redux'

export const Ending = () => {
    const logged=useSelector((state)=>state.AuthReducer.isLogged);
  return (
    <div className={`${Styles.end} container d-flex flex-column align-items-center flex-md-row justify-content-between  mt-5 mb-5`}>
    <p className='text-center text-white fs-3 fw-bolder mb-0'>استمتع بتجربة مشاهدة غير مسبوقة</p>
    <div  className="d-flex justify-content-center mt-5 mt-md-0">
    <SubscribeButton link={logged?"/pay":"/signup"} title="اشترك الأن"/>
    <BrowseButton/>
    </div>
    </div>
  )
}
