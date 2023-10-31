import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow  } from 'swiper/modules';
import image1 from '../../../public/Images/DesktopAR.jpg'
import axios from "axios";
import 'swiper/css';
import { URL } from '../../../config';
const SwiperComponent = ({dir,Styles}) => {
  const [movies,setMovies]=useState([image1,image1,image1,image1,image1,image1,image1]);
  // useEffect(()=>{
  //   axios.get(`${URL}?s=spider&apikey=da155f22`).then((response) => {
  //     setMovies(response.data.Search)
  //    });
  // },[])
  return (
    <Swiper  
    
    className={Styles.swiper}
    autoplay={{
      delay: 1,
      disableOnInteraction: false,
      reverseDirection : dir,
      delayBetweenSlides: 0,
      paused:false
    }}
  
    spaceBetween={5}
    slidesPerGroup={1}
    speed={2000}
    coverflowEffect={
     {stretch:0,
      rotate:0,
      depth:100,
      modifier:2.5  
     }
    }
    slidesPerView={'auto'}
    modules={[Autoplay,EffectCoverflow]} 
    loop={true}

    breakpoints={{
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
       
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,      
      },
      1024: {
        slidesPerView: 5,       
      },
    }}
  >
    {movies.map((image,idx)=>{
     return <SwiperSlide className={Styles.slide} key={idx}><img src={image}  /></SwiperSlide>
    })}
    
  </Swiper>  
  )
}

export default SwiperComponent
