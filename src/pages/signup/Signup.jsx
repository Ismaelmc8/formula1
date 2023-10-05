import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signup } from './signupRequests'
import './signup.css'
import { Container, Row, Card, Form, Button } from 'react-bootstrap'

const Signup = () => {
   const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  
  const navigate = useNavigate(); // Initialize useNavigate hook  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos de registro al servidor
    try {
      const response = await signup(formData);
      navigate('/home');
      // Do something with the response if needed, e.g., show a success message to the user.
    } catch (error) {
      console.log('Error:', error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <>
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
        <Row className="col-5 mx-auto align-items-center"> 
        
        <Card className='col m-2'>
          <Card.Body>
            <Card.Title className='text-center'><h2>Register</h2></Card.Title>   
          <Form className='d-grid gap-3' onSubmit={handleSubmit}>
            <Row>
              
            <Form.Group className='col' controlId="Name">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </Form.Group>
            <Form.Group className='col' controlId="lastname">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your last name"
              />
            </Form.Group>
            
            </Row>
            
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </Form.Group>
            <Form.Group controlId="password_confirmation">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </Form.Group>
            <div className='d-block'>
              <Button  variant="primary" type="submit">Sign Up</Button>
            </div>
          </Form>
          </Card.Body>
        </Card>
        </Row>
        </div>
      </div>
    </>
  )
}

export default Signup




