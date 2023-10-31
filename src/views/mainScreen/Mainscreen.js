import React, { useState } from 'react'

import Home from './components/Home';
import Navbar from '../layout/Navbar';
import Styles from '../../public/css/mainScreen.module.css'
import Payment from './components/payment';
import Subscription from './components/Subscription';
import CustomizedAccordions from './components/CustomizedAccordions';
import Answers from './components/Answers';
import { Ending } from './components/Ending';
import Footer from './components/Footer';


const MainScreen = () => {

  return (
    <>
    <div className={Styles.mainScreen}>
    <Home/>
     <Payment/>
     <Subscription/>
     <Answers/>
     <Ending/>
     <Footer/>
    </div>
    
    </>
  )
}

export default MainScreen;