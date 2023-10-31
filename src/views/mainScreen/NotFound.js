import React from 'react'

export const NotFound = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:"center" ,justifyContent:'center',backgroundColor:'#050b10',height:"100vh" }}>
        <h3 style={{ color:'white',fontSize:'40px' }}>Page Not Found</h3>
        <p style={{ color:'red',fontSize:'30px' }}> 404</p>
    </div>
  )
}
