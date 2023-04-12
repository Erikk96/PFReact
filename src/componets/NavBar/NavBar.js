import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Shop Malanzan</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#remeras">Remeras</Nav.Link>
                    <Nav.Link href="#pantalones">Pantalones</Nav.Link>
                    <Nav.Link href="#calzado">Calzado</Nav.Link>
                  </Nav>
                  <CartWidget/>
                </Container>
              </Navbar>
            </>
          );
}

export default NavBar