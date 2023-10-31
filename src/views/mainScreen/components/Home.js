import React, {useEffect, useState } from 'react'

import image1 from '../../../public/Images/DesktopAR.jpg'
import image2 from '../../../public/Images/MeNowXDesktopAR.jpg'
import image3 from '../../../public/Images/UNDesktopAR.png'
import image4 from '../../../public/Images/DesktopAR (1).jpg'
import Styles from '../../../public/css/mainScreen.module.css'
import auth from '../../../firebase';
import SwiperComponent from './SwiperComponent';
import { SubscribeButton } from './SubscribeButton'
import { BrowseButton } from './BrowseButton'
import { useSelector } from 'react-redux'
const Home = () => {
     const logged=useSelector((state)=>state.AuthReducer.isLogged);
  return (
    <div className={Styles.home}>
         <div className='container p-5'>
             <h1 className='display-6 lh-base'>استمتع بمشاهدة أقوى الأعمال الأصلية و
                   الحصرية التي تُعرض لأول مرة.
              </h1>
         </div>  
         <div>
              <SwiperComponent dir ={true} Styles={Styles} />
              <SwiperComponent dir ={false} Styles={Styles} />
          </div> 
         <div className='container d-flex flex-row justify-content-center'>
          <SubscribeButton link={logged?"/pay":"/signup"} title="اشترك الأن"/>
          <BrowseButton/>
         </div>
    </div>
   
  );
}

export default Home;
