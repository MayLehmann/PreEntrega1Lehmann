import './App.css';
import { ItemListContainer } from './components/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import carrito from './multimedia/carrito compras.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          </Nav>
        </Container>
      </Navbar>
      <img src= {carrito} alt="carritoCompras"/> 0  
    <ItemListContainer greeting = "Bienvenidx!"/> </>
  )
 }

 export default ColorSchemesExample;
//export default App
