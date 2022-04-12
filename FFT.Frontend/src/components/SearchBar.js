import { Form, InputGroup, Button } from "react-bootstrap";

function SearchBar() {
    return (
        <Form>
            <Form.Group controlId="SearchBar">
                <InputGroup>
                    <Form.Control type="search" placeholder="Search" />
                    <Button variant="primary" type="submit" href="/search">Search</Button>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;