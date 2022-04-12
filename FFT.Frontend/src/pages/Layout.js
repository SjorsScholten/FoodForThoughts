import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Container, Navbar, NavDropdown, Image, Stack } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

function Layout() {
    const [login, SetLogin] = useState(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">Food-For-Thoughts</Navbar.Brand>
                    <Stack direction="horizontal">
                        <SearchBar className="ml-auto" />
                        {
                            login ?
                                <NavDropdown title={
                                    <Image className="placeholder-img" src="holder.js/32x32" />
                                }>
                                    <NavDropdown.Item eventKey={0.1} href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item eventKey={0.1}>Item 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item eventKey={0.1}>Logout</NavDropdown.Item>
                                </NavDropdown> :
                                <p>Login</p>
                        }
                        
                    </Stack>
                </Container>
            </Navbar>
            <br />
            <Outlet />
            <br />
        </>
    )
};

export default Layout;