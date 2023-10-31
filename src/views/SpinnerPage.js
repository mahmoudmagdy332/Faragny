import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const SpinnerPage = () => {
  return (
    <div style={{ width:'100%',height:'100vh', position:'absolute',zIndex:'100',
    backgroundColor:'#050b10',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ClipLoader
        color={'red'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
