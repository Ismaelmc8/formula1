import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
import Container from 'react-bootstrap/Container';
import { Form, Button, Card, Row } from 'react-bootstrap';
import { loginRequest } from './loginRequests';
import { AuthProvider, AuthContext } from '../../helpers/AuthProvider';

// import LocalStorageService from './services/storage/localstorageservice'

const LoginPage = () => { 
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  const navigate = useNavigate(); // Initialize useNavigate hook  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginRequest(formData);
      if (response.token) {
        localStorage.setItem('token', response.token); // Guardar el token en localStorage
        authContext.setAuthToken(response.token); // Actualiza el token en el contexto
        authContext.setIsLoggedIn(true); // Actualiza el estado de inicio de sesión en el contexto
        navigate('/home');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
    <AuthProvider></AuthProvider>
    <Container className='d-flex align-items-center justify-content-center' style={{height:`95vh`}}>
      <Row className="col-5 mx-auto align-items-center">
        <Card className='col m-2'>
          <Card.Body>
            <Card.Title className='text-center'><h2>Loggin</h2></Card.Title>
            <Form className='d-grid gap-3' onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">Register</Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
    </>
  )
}

export default LoginPage