import React, { Component } from 'react'
import{Navbar,Nav,Button} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <>
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <NavLink className="navbar-brand" to="/">Admin dashboard</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <Link exact className="active_class login_btn" to="/signin">
                        <Button variant="outline-secondary text-white">Sign In</Button>
                    </Link>
                    <Link exact className="active_class login_btn" to="/signup">
                        <Button className="ml-2" variant="outline-secondary text-white">Sign Up</Button>
                    </Link>
                    </Nav>
                    </Navbar.Collapse>
                 </Navbar>
            </>
        )
    }
}