import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Container, Form } from "react-bootstrap";

async function loginUser(credentials){
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    }).then(data => console.log("login finished"))
}

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({username, password});
        setToken(token);
    }

    return (
        <Card className="w-50 m-auto">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={e => setUserName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

Login.propType = {
    setToken: PropTypes.func.isRequired
}