import { Container, Navbar, NavDropdown, Image, Stack } from "react-bootstrap";
import SearchBar from '../components/SearchBar';

export default function NavigationPreloadManager(props) {

    if(props.token){
        return (
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">Food-For-Thoughts</Navbar.Brand>
                    <Stack direction="horizontal">
                        <SearchBar className="ml-auto" />
                        <NavDropdown title={ <Image className="placeholder-img" src="holder.js/32x32" /> }>
                            <NavDropdown.Item eventKey={0.1} href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item eventKey={0.1}>Item 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey={0.1}>Logout</NavDropdown.Item>
                        </NavDropdown> 
                    </Stack>
                </Container>
            </Navbar>
        )        
    }
    else {
        return (
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand className="me-auto" href="/">Food-For-Thoughts</Navbar.Brand>
                    <SearchBar />
                    <Navbar.Text className="ms-3">
                        <a href="/login">Login</a>
                    </Navbar.Text>
                </Container>
            </Navbar>
        )
    }
}