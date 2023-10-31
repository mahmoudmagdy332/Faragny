import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import image from '../../public/Images/signIn.jpg';
import { Alert, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import auth from  "../../firebase";
import { useRef, useState } from 'react';
import { login } from '../../redux/slices/AuthSlice';
import { useDispatch } from 'react-redux';
import { SpinnerPage } from '../SpinnerPage';
const Login = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const [loading,setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const redirectPath=location.state?.path||'/home'
  const loginHandle=async()=>{
    if (passwordRef.current.value === null || emailRef.current.value === null) {
      return setError("fields is required");
    }
    if (passwordRef.current.value.length < 6) {
      return setError("Passwords must more 6 char");
    }
    try{
      setLoading(true);
      setError("");
      const user=await signInWithEmailAndPassword(auth,emailRef.current.value ,passwordRef.current.value);
      dispatch(login({email:emailRef.current.value,password:passwordRef.current.value}));
      navigate(redirectPath,{replace:true}); 
    }catch{
      setError("password or email error");
      setLoading(false);
    }
  }
  return (
<div className='d-flex  justify-content-center align-items-center' style={{ height:'100vh', backgroundColor:'#f5efef',backgroundImage:`url(${image})`,backgroundSize:'cover'}}>
  
  <Container style={{backgroundColor:'#000000c2',padding:'40px 20px 10px', color:'white',maxWidth:'600px'}} className='rounded'>
 <h3 className=" text-center mb-5 text-white " >تسجيل الدخول</h3>
      <Form >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              البريد الإلكترونى
            </Form.Label>
            <Col sm="9">
            <Form.Control type="text" placeholder="البريد الإلكترونى" ref={emailRef}/>        </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
              كلمة المرور
            </Form.Label>
            <Col sm="9">
              <Form.Control type="password" placeholder="كلمة المرور" ref={passwordRef}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="9">
            <Button  style={{ backgroundColor: '#e50914',border:'none'}}  disabled={loading} className='w-100' onClick={loginHandle}>
             { loading?"انتظر التحميل...":"تسجل الدخول" }
            </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="9">
            <Stack direction="horizontal" gap={3} className=' justify-content-center mt-4'>
        <Link to={`/signup`} style={{ color:'yellow' }}>انشاء حساب</Link>
        <Link to={`/forgetPassword`} style={{ color:'yellow' }}>هل نسيت كلمة السر</Link>
        </Stack>
        {error && <Alert variant="danger " className='mt-3'>{error}</Alert>}
            </Col>
          </Form.Group>
         
        </Form>
       
        

        </Container>

        {loading && <SpinnerPage/>}
  </div>     

  )
}

export default Login
