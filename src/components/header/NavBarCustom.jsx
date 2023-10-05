import React, { useContext } from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AuthContext } from '../../helpers/AuthProvider';


const NavBarCustom = () => {
  const authContext = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    authContext.setIsLoggedIn(false);
    authContext.setAuthToken(null); 

  };
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            LOGGED
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="/leagues">Mis Tableros</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout} href="/">Loggout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCustom