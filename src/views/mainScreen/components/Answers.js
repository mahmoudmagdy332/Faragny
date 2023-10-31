import React from 'react'
import CustomizedAccordions from './CustomizedAccordions'

const Answers = () => {
  return (
    <div className='container ' style={{ marginTop:'10rem',marginBottom:'10rem' }}>
          <div className='text-center mb-5'>
          <h3 className='text-white fs-3 fw-bolder mb-4'> الأسئلة الشائعة</h3>
          <p className='text-light fs-4 fw-light'> هل لديك أي استفسارات؟</p>
        </div>
        <CustomizedAccordions/>
    </div>
  )
}

export default Answers
