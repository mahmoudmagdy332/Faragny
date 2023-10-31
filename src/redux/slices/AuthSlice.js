import { createSlice } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import auth from  "../../firebase";




  let initialState={
        currentUser: {
          email:"",
          password:""
        },
        isLogged:false,
        isLoading:false
      }
      if(localStorage.getItem('userInfo')!=='nu'){
        const emailInfo=JSON.parse(localStorage.getItem('userInfo')).email;
        const passwordInfo=JSON.parse(localStorage.getItem('userInfo')).password;
        initialState={
          currentUser: {
            email:emailInfo,
            password:passwordInfo
          },
          isLogged:true,
          isLoading:false
        }
      }
     
 

export const AuthSlice =  createSlice({
  name: 'Auth',
  initialState,
  reducers: {
  
    login: (state,action) => {
      state.isLogged= true;
      localStorage.setItem('userInfo',JSON.stringify({email:action.payload.email,password:action.payload.password}));
      state.currentUser.email=action.payload.email;
      state.currentUser.password=action.payload.password;
    },
    logout:(state) => {
      state.isLogged= false;
      localStorage.setItem('userInfo','nu');
      state.currentUser.email="";
      state.currentUser.password="";
    },
    checkAuth:(state)=>{
      state.isLoading=true;
      signInWithEmailAndPassword(auth,state.currentUser.email,state.currentUser.password).then(()=>{
        state.isLogged= true;
        state.isLoading=false;
        }).catch((e)=>{
          state.isLogged= false;
          state.isLoading=false;
        })
    }
    ,
    loadingChange:(state,action)=>{
      state.isLoading=action.payload;
    }
  },
})
export const {login,logout,loadingChange,checkAuth}=AuthSlice.actions
export default AuthSlice.reducer