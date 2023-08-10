import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from './multimedia/carrito compras.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { CartWidget } from './components/CartWidget';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OverVan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Experiencias</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
     
    <ItemListContainer greeting = "Bienvenidx!"/> </>
  )
 }

 export default ColorSchemesExample;

