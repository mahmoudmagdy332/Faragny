import React, { useState } from 'react'
import logo from '../../public/Images/Mahmoud1.png'
import { Link ,useLocation, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribeButton } from '../mainScreen/components/SubscribeButton';
import { Alert } from 'react-bootstrap';
import auth from  "../../firebase";
import { logout } from '../../redux/slices/AuthSlice';
import { signOut } from 'firebase/auth';
import { SpinnerPage } from '../SpinnerPage';

const Navbar = () => {
  const location = useLocation();
  const logged=useSelector((state)=>state.AuthReducer.isLogged);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const logoutHandle=async()=>{
    try{
      setLoading(true);
      const user=await signOut(auth);
      dispatch(logout());
      navigate('/');
      setLoading(false);
    }catch{
      setError("Failed ");
      setLoading(false);
    }
  }
  if(loading){
    return(
      <SpinnerPage/>
    )
  }
  return (
    <nav className="navbar header fixed-top" >
        <div className="container-fluid">
            <div className="header-links position-static d-md-flex">
                  <Link to='/' style={{ textDecoration:'none' }}><h2 className='text-white'>فرجنى</h2></Link> 
            <div>
            {/* <i className="fa-solid fa-magnifying-glass text-white"></i> */}
           
            
           </div>
         
        </div> 
        {/* <i className="fa-solid fa-bars  d-md-none bar" data-bs-toggle="offcanvas" 
           data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"></i> */}
          {logged?(
        <button  onClick={logoutHandle} className="btn " style={{ backgroundColor:'yellow', fontWeight:'bold' }}>تسجيل خروج</button>
          ):
          location.pathname==='/login'?(
          <Link  to='/signup' className="btn " style={{ backgroundColor:'yellow', fontWeight:'bold' }}>انشاء حساب</Link>
          ):(
            <Link  to='/login' className="btn p-1 p-md-2 " style={{ backgroundColor:'yellow', fontWeight:'bold',fontSize:'14px' }}>تسجيل الدخول</Link>
          )}

        <div className="offcanvas offcanvas-end popleft"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header d-flex justify-content-end text-white">
                <i className="fa-regular fa-circle-xmark " data-bs-dismiss="offcanvas"></i>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link  selected" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Prtofilo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
</nav>
  )
}

export default Navbar;
