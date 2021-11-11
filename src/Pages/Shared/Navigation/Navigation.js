import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar bg="light" className='px-2' variant="light" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img width='150px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/jewellery">Jewellery Shop</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    {
                        user.email ? <button className='btn-regular' onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;