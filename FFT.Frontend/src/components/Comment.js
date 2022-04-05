import { Card } from 'react-bootstrap'

function Comment(props) {

    return (
        <Card>
            <Card.Header>
                Header
            </Card.Header>
            <Card.Body>
                This is a comment
            </Card.Body>
        </Card>
    );
}

export default Comment;