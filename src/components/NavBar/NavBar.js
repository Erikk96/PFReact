import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Shop Malanzan</Navbar.Brand>
                  <Nav className="me-auto">
                    <Link to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</Link>
                    <Link to={`/category/notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</Link>
                    <Link to={`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</Link>
                  </Nav>
                  <CartWidget/>
                </Container>
              </Navbar>
          )
}

export default NavBar