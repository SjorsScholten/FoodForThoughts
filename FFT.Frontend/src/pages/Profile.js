import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Profile() {
    const params = useParams();

    return (
        <Container>
            <h1>Profile: {params.profileId}</h1>

        </Container>
    );
}

export default Profile;