import { DECREMENT, INCREMENT } from "../action"

export const Increment_one=(dispatch)=>{
    return dispatch({
        type:INCREMENT
    })
}
export const Decrement_one=(dispatch)=>{
    return dispatch({
        type:DECREMENT
    })
}