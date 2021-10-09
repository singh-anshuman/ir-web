import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Investment Research</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        )
    }
}