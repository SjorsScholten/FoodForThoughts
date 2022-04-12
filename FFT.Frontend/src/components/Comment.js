import { Stack, Image, Button, Card } from 'react-bootstrap'

function Comment(props) {

    return (
        <Card>
            <Card.Header>
                <Stack direction="horizontal" gap={2}>
                    <Image className="placeholder-img" src="holder.js/32x32?theme=vine" />
                    {props.item.name}
                    <div className="ms-auto">{props.item.date}</div>
                </Stack>
            </Card.Header>
            <Card.Body>
                {props.item.data}
            </Card.Body>
            <Card.Img className='placeholder-img' variant="bottom" src="holder.js/300x250" />
            <Card.Footer>
                <Stack direction="horizontal">
                    <Button className="ms-auto" variant="primary">Like</Button>
                </Stack>
            </Card.Footer>
        </Card>
    );
}

export default Comment;