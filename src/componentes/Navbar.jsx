import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="h1 mt-3" href="/">Irradiación Natural <br/><span className="subbrand">by Guillermina Bres</span></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="bio">BIO</Link>
                        <Link className="nav-link" to="laobra">LA OBRA</Link>
                        <Link className="nav-link" to="formulario">ADM FOTOS</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;