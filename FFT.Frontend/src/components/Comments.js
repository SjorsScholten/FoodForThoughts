import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Comment from './Comment';

function Comments(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5002/api/post")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    /*
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.id}
                    </li>
                ))}
            </ul>
        );
    }
    */
    const comments = ["1", "2", "3"];

    return (
        <Container>
            {comments.map(item => (
                <Comment />
            ))}
        </Container>
    );
}

export default Comments;