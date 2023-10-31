import React from 'react'
import Switch from "react-switch";
const PaymentChoise = ({Select,check}) => {
    
    return (
      <div className='container'>
        <div className='  d-flex flex-row  text-white  text-center justify-content-center '>
              <h3 className='fs-6 align-self-center'>اشتراك شهري</h3>
              <Switch className='ms-2 me-2 align-self-center' onChange={Select} 
                  onColor="#fff"
                  offColor='#fff'
                  onHandleColor="#000"
                  offHandleColor="#00f"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={25}
                  width={50}
                  checked={check}
              />
              <h3 className='fs-6 align-self-center' >اشتراك سنوي</h3>
        </div>
        
      </div>
      
    )
}

export default PaymentChoise
