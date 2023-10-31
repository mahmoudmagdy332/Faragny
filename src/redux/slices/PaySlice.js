import { createSlice } from '@reduxjs/toolkit'



let initialState={
  isPay:false,
  payment:{
    ads:false,
    month:false,
    TV:0,
    priceBefore:"",
    priceAfter:""
  }
}
if(localStorage.getItem('payInfo')){
  const pay=JSON.parse(localStorage.getItem('payInfo'));
  initialState={
    isPay:pay.isPay,
    payment:pay.payment
  }
}

export const PaySlice = createSlice({
  name: 'pay',
  initialState,
  reducers: {
    setPayment: (state,action) => {
        state.payment.TV=action.payload.tv;
        state.payment.ads=action.payload.ads;
        state.payment.month=action.payload.month;
        state.payment.priceAfter=action.payload.priceAfter;
        state.payment.priceBefore=action.payload.priceBefore;
    },
    changeIsPay:(state,action)=>{
      state.isPay=action.payload; 
    }
  },
})
export const {setPayment,changeIsPay}=PaySlice.actions
export default PaySlice.reducer