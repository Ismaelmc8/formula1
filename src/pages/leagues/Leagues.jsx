import React from 'react'
import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import './leagues.css'

function Leagues() {
  let createPopUp = false;
  let joinPopUp = false;
  return (
    <Container>
      <Row>
        <Col>
          <Card className='text-center col-6 mx-auto p-5 m-5'>
            <Card.Title className='m-5 mt-4'><h3>Empieza creando tu propia liga</h3></Card.Title>
            <Card.Text>
              Crea tu propia lia, busca tus amigos y juntalos para decidir quien es el más acertado
            </Card.Text>
            <Card.Text>
              Crea la tuya o únete con un código
            </Card.Text>
            <Col className='text-center mt-4'>
                <Button variant='success' className='mx-2'>
                  Create League <AiOutlinePlus/>
                </Button>
                <Button variant='dark' className='mx-2'>
                  Unirse con código
                </Button>
              </Col>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Nombre de la liga</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pepito</td>
                <td>Hernesto</td>
                <td>Hernesto2</td>
                <td>Hernesto3</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col>COL 1</Col>
          </Row>
        </Col>
      </Row>
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
    </Container>
  )
}

export default Leagues