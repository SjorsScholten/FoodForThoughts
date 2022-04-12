import { Container, Stack, Accordion } from "react-bootstrap";
import Comment from "../components/Comment";
import SearchBar from "../components/SearchBar";

function SearchFilters() {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                        filters
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

function Search() {

    const items = [
        { id: 1, name: "John", data: "Quisque eu arcu sit amet lacus commodo dictum eget ut enim. Etiam efficitur nisi a felis consequat auctor. Curabitur porta feugiat eros, vel molestie ligula vulputate vitae. Cras efficitur iaculis dui non aliquet. Nam sit amet sodales quam. Sed sed sem turpis. Fusce sed placerat eros. Integer sit amet massa eros. Etiam condimentum lectus commodo nisl ornare, lobortis varius quam vehicula. Fusce placerat massa eget lectus porta ultrices. Donec justo justo, tincidunt blandit libero eget, cursus fringilla magna. Nam consequat enim sed lorem hendrerit molestie. Vestibulum ornare arcu mi." },
        { id: 2, name: "Jane", data: "Vestibulum fringilla semper odio eget finibus. Ut eget sodales nisl. Etiam eget condimentum enim. Donec interdum mi nec ex congue pretium. Integer tempor sodales quam, eget dictum eros blandit semper. Phasellus vitae malesuada sapien. Mauris at lacus lorem. Duis non viverra massa, ac hendrerit magna. Nunc pharetra in nulla vitae mollis. Sed vel odio non nisl finibus scelerisque. Donec volutpat dui et sollicitudin sollicitudin. Proin nec ipsum luctus lacus sollicitudin convallis sed sed leo. Suspendisse pellentesque enim eget sapien fringilla interdum. Mauris tempor diam sit amet nisl laoreet, vitae finibus dolor malesuada." },
        { id: 3, name: "Jack", data: "Nullam ornare odio in luctus aliquet. Morbi leo massa, ornare in orci vel, placerat tincidunt lorem. Fusce et consequat arcu. Nulla et feugiat risus. Duis augue erat, rutrum vel est nec, efficitur tempor mauris. Fusce quis quam viverra est luctus lobortis. Proin mauris nulla, ornare vel velit id, tempus molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod, purus ut pulvinar ultrices, velit odio sollicitudin ligula, ut porta nulla quam in erat. Maecenas pretium magna in nulla gravida efficitur. In hac habitasse platea dictumst." }
    ]

    return (
        <Container>
            <Stack gap={3}>
                <SearchBar />
                <SearchFilters />
                {items.map((item) => <Comment item={item} />)}
            </Stack>
        </Container>
    );
}

export default Search;