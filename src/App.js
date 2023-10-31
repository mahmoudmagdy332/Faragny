import 'bootstrap/dist/css/bootstrap.min.css';
import './public/css/all.min.css';
import './public/css/main.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Routes, Route, useNavigate} from "react-router-dom";
import ReduxCounter from './views/redux/ReduxCounter';
import SignUp from './views/Authentication/SignUp';
import Login from './views/Authentication/Login';
import Dashboard from './views/Authentication/Dashboard';
import ForgetPassword from './views/Authentication/ForgetPassword';
import React from 'react';
import Navbar from './views/layout/Navbar';
import MainScreen from './views/mainScreen/Mainscreen';
import MainPayment from './views/mainScreen/components/MainPayment';
import NonAds from './views/mainScreen/components/NonAds';
import Phone from './views/mainScreen/components/Phone';
import RequireAuth from './views/Authentication/RequirAuth';
import { OnAuth } from './views/Authentication/OnAuth';
import { SpinnerPage } from './views/SpinnerPage';
import { PaymentScreen } from './views/mainScreen/PaymentScreen';
import { PayGetWay } from './views/mainScreen/PayGetWay';
import { NotFound } from './views/mainScreen/NotFound';
import { OnAuthAndPay } from './views/Authentication/OnAuthAndPay';
const LazyDashboard =React.lazy(()=>import('./views/mainScreen/Mainscreen'))

function App() {


return (
<>
<Routes>
  
      <Route path="/home" element={
          <RequireAuth>
               <Navbar/>
               <Dashboard/>
          </RequireAuth>
      }/>
    
    <Route path="/" element={
      <OnAuthAndPay>
      <React.Suspense fallback={<SpinnerPage/>}>
        <Navbar/>
         <LazyDashboard/>
      </React.Suspense>
      </OnAuthAndPay>
    }>
        <Route   path="" element={<MainPayment/>}/>
        <Route path="non-ads" element={<NonAds/>}/>
        <Route path="phone" element={<Phone/>}/>
    </Route>
    <Route path="/pay" element={ 
    <OnAuthAndPay>
          <Navbar/>
          <PaymentScreen/>
    </OnAuthAndPay>
      }>
        <Route  path="" element={<MainPayment/>}/>
        <Route path="non-ads" element={<NonAds/>}/>
        <Route path="phone" element={<Phone/>}/>
    </Route>
    <Route path="/customPay" element={
      <>
      <Navbar/>
      <PayGetWay/>
      </>
    
    } />
    <Route path="/login" element={
      <OnAuth>
        <Navbar/>
        <Login/>    
      </OnAuth>    
    }/>
    <Route path="/signup" element={
    <>
    <Navbar/>
    <SignUp/>
    </>
    }/>
    <Route path="/forgetPassword" element={
      <>
       <Navbar/>
       <ForgetPassword/>
      </>
    }/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</>
          
  );
} 

export default App;
