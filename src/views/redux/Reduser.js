import React from 'react'
import { DECREMENT, INCREMENT } from './action';
import { createStore } from 'redux';
const IntialState={count:0};
export const Reduser=(state=IntialState,action)=> {
 switch (action.type){
 case INCREMENT:
    return {...state,count :state.count+action.value};
case DECREMENT:
    return {...state,count :state.count-1};
default:
    return state;
 }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const counterStore=createStore(Reduser,composeEnhancers());
