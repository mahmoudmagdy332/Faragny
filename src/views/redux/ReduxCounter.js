import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement_one, Increment_one } from './action/CounterAction';


const ReduxCounter = () => {
    const countSelect=useSelector((state)=>state.counter.count);
    const dispatch =useDispatch();
   const IncrementHandeler=(val)=>{
        Increment_one(dispatch);
    }
    const DecrementHandeler=()=>{
        Decrement_one(dispatch);
    }
  return (
    <div className='mt-5 pt-5'>
      <p>{countSelect}</p>
      <button onClick={()=>IncrementHandeler(3)}>increment</button>
      <button onClick={()=>DecrementHandeler()}>decrement</button>
    </div>
  )
}

export default ReduxCounter
