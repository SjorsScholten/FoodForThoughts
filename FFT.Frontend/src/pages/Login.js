import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Form } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';

async function loginUser(credentials){
    return fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    });
}

async function registerUser(credentials){
    return fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    });
}

export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async e => {
        e.preventDefault();
        loginUser({email, password})
            .then(res => res.json())
            .then(jsn => {
                console.log(jsn);
                setToken(jsn.token)
                navigate("/profile/" + jsn.id)
            });
    }

    const registerSubmit = async e => {
        e.preventDefault();
        const token = await registerUser({username, email, password});
        setToken(token);
    }

    return (
        <>
            <Card className="w-50 m-auto">
                <Card.Header>Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <Card className="w-50 m-auto">
                <Card.Header>Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={registerSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

Login.propType = {
    setToken: PropTypes.func.isRequired
}