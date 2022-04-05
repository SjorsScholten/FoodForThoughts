import { Outlet } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Food-For-Thoughts</Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            className="me-2"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
};

export default Layout;