import React, { useState } from 'react'
import Styles from '../../../public/css/mainScreen.module.css'
const PaymentItem = ({YM,priceBefore,priceAfter,TV,ST,activeHandle}) => {
   
    return(
<div className={`${Styles.checkedBox } 
rounded col-12 col-md-3 d-flex flex-md-column justify-content-between`}
onClick={activeHandle} style={{ borderColor:ST && '#e3e308' }}
>
    <div className=' d-flex flex-md-row-reverse mb-md-5  justify-content-md-between'>
    <div className={`${Styles.check_circle} align-self-center`} style={{ backgroundColor:ST && '#e3e308' }}>
    <i className={`fa fa-check ${Styles.icon}`} aria-hidden="true"></i>
    </div>
    <div className='d-flex'>
    <h3 className='text-white mb-0 me-2 ms-1 fs-6 align-self-center'>{TV} شاشة  /</h3>
    <p className='text-success m-0 '>{YM}</p>
    </div>
   
    </div>
    <div className='d-flex justify-content-md-end '>
    <p className='mb-0 ms-1 '><del>{priceBefore}</del></p>
    <p className='mb-0 text-white fs-6 '>{priceAfter}</p>
    </div> 
</div>
    );
}

export default PaymentItem
