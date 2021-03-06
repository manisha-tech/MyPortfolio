import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../assets/icons/logo.jpg";
import "./my-navbar.styles.css";


const MyNavbar = () => {
  return(
  <div>
    <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between" >
      <div>
        <Navbar.Brand href="#home">
          <img className="Logo" src={Logo} alt="My Portfolio Logo" />
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </div>
    </Navbar>
  </div>
    )  
}

export default MyNavbar;