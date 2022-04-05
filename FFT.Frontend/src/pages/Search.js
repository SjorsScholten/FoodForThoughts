import { Container, ListGroup } from "react-bootstrap";

function Filters() {
    return (
        <ListGroup>
            <ListGroup.Item>Filter 1</ListGroup.Item>
            <ListGroup.Item>Filter 2</ListGroup.Item>
            <ListGroup.Item>Filter 3</ListGroup.Item>
        </ListGroup>)
}

function Search() {
    return (
        <Container>
        <h1>Search</h1>
            <Filters />
        </Container>
    );
}

export default Search;