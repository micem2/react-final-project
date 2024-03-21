import React from "react";
import { Nav, Container, Stack, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import recyclelogo from "./img/logo.png"


function SiteNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <img src={recyclelogo}></img>
            <Navbar.Text>Prime Electronics Recycling</Navbar.Text>
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/products" className="nav-link">Store</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Stack gap={3} className="col-md-10 mx-auto mt-3">
                <Outlet />
            </Stack>
            <footer>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Text>Prime Electronics Recycling Created by Elliot</Navbar.Text>
                </Navbar>
            </footer>
        </>
    )
}

export default SiteNavbar;