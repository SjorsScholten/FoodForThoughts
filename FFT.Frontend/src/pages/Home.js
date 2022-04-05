import { Container } from "react-bootstrap";
import Comments from "../components/Comments";

function Home(){
    return (
        <Container>
            <h1>Home</h1>
            <Comments />
        </Container>
    );
};

export default Home;