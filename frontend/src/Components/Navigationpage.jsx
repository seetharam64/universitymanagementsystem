import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import './Navigationpage.css'

function Navigationpage(){
return (
    <>
    <div className='header'>
        <h1>Student Management System</h1>
    </div>
    <Navbar expand="lg" className='nav-bar'>
        <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='redirectlinks' flex-column>
                    <div><NavDropdown title="Navigation" id='nav-dropdown'>
                        <NavDropdown.Item href="./examination">Examination</NavDropdown.Item>
                        <NavDropdown.Item href="">RMS</NavDropdown.Item>
                    </NavDropdown></div>
                    <div><Nav.Link href="">My Profile</Nav.Link></div>
                    <div><Nav.Link href="">My Messages</Nav.Link></div>
                    <Nav.Link href="">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    </>
)
}
export default Navigationpage;