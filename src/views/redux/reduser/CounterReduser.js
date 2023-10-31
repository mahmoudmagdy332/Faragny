import React from 'react'
import { DECREMENT, INCREMENT } from '../action'

const IntialCounter={
    count:0
};

const CounterReduser = (state=IntialCounter,action) => {
 switch(action.type){
    case INCREMENT:
        return {...state,count:state.count+1}
    case DECREMENT:
        return {...state,count:state.count-1}
    default:
        return state;
 }
}

export default CounterReduser
