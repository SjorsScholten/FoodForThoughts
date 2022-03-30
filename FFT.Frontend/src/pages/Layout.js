import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Food-For-Thoughts</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;