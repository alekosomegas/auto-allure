import { Nav, Navbar, Container } from "react-bootstrap"
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainNavbar() {
    return (
        <Navbar expand="lg" fixed='top'>
        <Container>

          <Navbar.Brand href="/" className="no-underline" > 
            <Image
                className="p-0"
                src={"/company_logo_inv.png"}
                width={40}
                height={40}
                alt={'logo'}
            />
            <div className="flex flex-col">
                    <strong className="m-0 font-logo text-4xl tracking-wide text-white">auto-</strong>
                <small className="text-[0.75rem] leading-[0.3rem] text-white">rent-a-car</small>
            </div>
            <strong className="relative font-logo text-5xl tracking-wide text-white">allure</strong>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="/#AboutUs">About Us</Nav.Link>
              <Nav.Link className="text-white" href="/#Contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}