import React, { useState } from "react";

const Button=({fun,text,count})=>{
    console.log(text);
    return(
        <>
        <button className=" btn btn-primary " onClick={fun}>{text}: {count} </button>
        
        </>
    );
}
export default React.memo(Button) ;
