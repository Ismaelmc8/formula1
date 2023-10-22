import React from 'react'
import { Container, Row, Col, Table, Button, Card, Form } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import './leagues.css'
import PopupCreate from '../../components/popup-create/PopupCreate';
function Leagues() {
  let createPopUp = false;
  let joinPopUp = true;
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
      {joinPopUp ? < PopupCreate/> :<></>}
    </Container>
  )
}

export default Leagues