import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
const navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Orinateir</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Smart Phone</Nav.Link>
                    <Nav.Link href="#features">Tablette</Nav.Link>
                    <Nav.Link href="#pricing">Accessoir</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default navbar
