import { Nav, Navbar, Container } from "react-bootstrap"
import Logo from "./Logo"

export default function MainNavbar() {
    return (
        <Navbar expand="lg" fixed='top'>
        <Container>

          <Navbar.Brand href="/" className="no-underline" > 
            <Logo 
            icon={true}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="/#about-us">About Us</Nav.Link>
              <Nav.Link className="text-white" href="/#long-term">Long Term</Nav.Link>
              <Nav.Link className="text-white" href="/#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}