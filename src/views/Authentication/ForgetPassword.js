import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import image from '../../public/Images/signIn.jpg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const ForgetPassword = () => {
  return (
    <div style={{ height:'100vh', backgroundColor:'#f5efef',backgroundImage:`url(${image})`,backgroundSize:'cover'}}className='d-flex  justify-content-center align-items-center'>
    <Container style={{backgroundColor:'#000000c2',padding:'40px 20px', color:'white',maxWidth:'600px'}} className='rounded'>
    <h3 className=" text-center mb-4 text-white" >استعادة كلمة المرور</h3>
         <Form >
             <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
               <Form.Label column sm="3">
                البريد الالكتروني
               </Form.Label>
               <Col sm="9">
               <Form.Control type="text" placeholder="ادخل البريد الالكتروني" />        </Col>
             </Form.Group>
    
             <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="9">
            <Button  style={{ backgroundColor: '#e50914',border:'none'}}  className='w-100'>
             ارسال
            </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="3">
            </Form.Label>
            <Col sm="9">
            <Stack direction="horizontal" gap={3} className=' justify-content-center mt-4'>
        <Link to={`/login`} style={{ color:'yellow' }}>تسحيل دخول</Link>
        <Link to={`/signup`} style={{ color:'yellow' }}>انشاء حساب</Link>
        </Stack>
            </Col>
          </Form.Group>
           </Form>
           </Container>
     </div>     
  )
}

export default ForgetPassword
