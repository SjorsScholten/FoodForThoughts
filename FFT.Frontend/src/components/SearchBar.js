import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { createSearchParams, useNavigate } from 'react-router-dom';

function SearchBar() {
    const [search, setSearch] = useState();

    const navigate = useNavigate();

    const searchHandle = () => {
        navigate({
            pathname: '/search',
            search: '?search=value',
        });
    }

    return (
        <Form onSubmit={searchHandle}>
            <Form.Group controlId="SearchBar">
                <InputGroup>
                    <Form.Control type="search" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
                    <Button variant="primary" type="submit" href="/search">Search</Button>
                </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;