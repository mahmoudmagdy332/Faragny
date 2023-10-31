import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import image from '../../public/Images/signIn.jpg';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useDispatch} from 'react-redux';
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from  "../../firebase";
import { login } from '../../redux/slices/AuthSlice';
import { SpinnerPage } from '../SpinnerPage';
const SignUp =  () => {
  const navigate=useNavigate();
  const location=useLocation();
  const [loading,setLoading] = useState(false);
   const dispatch = useDispatch()
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const signupHandle=async()=>{
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
      }
      if (passwordRef.current.value.length < 6) {
        return setError("Passwords must more 6 char");
      }
      try{
        setLoading(true);
        setError("");
        const user=await createUserWithEmailAndPassword(auth,emailRef.current.value ,passwordRef.current.value);
        dispatch(login({email:emailRef.current.value,password:passwordRef.current.value})); 
        navigate('/pay');      
      }catch{
        setError("Failed to create an account");
        setLoading(false);
      }
    }
  return (
      
      
<div style={{ height:'100vh', backgroundColor:'#f5efef',backgroundImage:`url(${image})`,backgroundSize:'cover'}}className='d-flex  justify-content-center align-items-center'>
 <Container style={{backgroundColor:'#000000c2',padding:'40px 20px', color:'white',maxWidth:'600px'}} className='rounded'>
 <h3 className=" text-center mb-5 text-white">انشاء حساب جديد</h3>
 {error && <Alert variant="danger">{error}</Alert>}

      <Form >
        
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="3">
              البريد الإلكترونى
            </Form.Label>
            <Col sm="9">
            <Form.Control type="text" placeholder="البريد الإلكترونى" ref={emailRef}/> </Col>
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
              <Form.Control type="password" placeholder="أعد كتابة كلمة المرور" ref={passwordConfirmRef}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="9">
            <Button style={{ backgroundColor: '#e50914',border:'none'}}  className='w-100' onClick={signupHandle}>
            {loading? 'انتظر التحميل...' : 'التالى'} 
            </Button>
            </Col>
          </Form.Group>
        </Form>
        <Stack direction="horizontal" gap={1} className=' justify-content-center align-items-center mt-4'>
         لديك حساب بالفعل ؟
        <Link to={`/login`} style={{ textDecoration:'none',color:'yellow' }}>تسجيل دخول</Link>
        </Stack>
        
        </Container>
        {loading && <SpinnerPage/>}
  </div>       
  

   
   
  
  )
}

export default SignUp
