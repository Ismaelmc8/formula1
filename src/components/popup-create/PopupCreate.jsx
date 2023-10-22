import React, { useState } from 'react';
import './popupCreate.css';
import { popupRequests } from './popupRequests';

import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap'

const PopupCreate = () => {
  const [leagueName, setLeagueName] = useState('');

  const handleLeagueNameChange = (event) => {
    setLeagueName(event.target.value);
  };

  const handleCreateButtonClicked = () => {
    if (leagueName) {
      const apiUrl = 'yourApiEndpoint'; // Replace with your API endpoint
      
      // Send a POST request using Axios
      axios
        .post(apiUrl, { nombre_liga: leagueName })
        .then((response) => {
          // Handle the response as needed
          console.log('Request succeeded:', response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error('Request failed:', error);
        });
    }
  };


  return (
    <>
    <Row className='popup-card'>
        <Col className='width-popup-slim mx-auto'>
          <Card className='text-center p-5'>
            <Card.Title className='mb-4'>Crear una Liga</Card.Title>
            <Card.Subtitle className='mb-2'>Cre una liga e invita a tus amigos</Card.Subtitle>
            <Form className='text-start'>
              <Form.Group className='mb-3'>
                <Form.Label>Nombre de la liga:</Form.Label>
                <Form.Control
                 type='text'/>
              </Form.Group>
              <Row>
                <Col className='d-grid'>
                  <Button variant='danger'>
                    Cancel
                  </Button>
                </Col>
                <Col className='d-grid'>
                  <Button variant='success'>
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PopupCreate