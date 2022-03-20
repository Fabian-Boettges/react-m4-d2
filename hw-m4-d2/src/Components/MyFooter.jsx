import { Navbar, Container } from 'react-bootstrap'

export default function MyFooter() {
    return (
    <Navbar id="footer" className="bg-dark">
        <Container>
            <Navbar.Brand href="#">Footer</Navbar.Brand>
        </Container>
    </Navbar>
    )
};

