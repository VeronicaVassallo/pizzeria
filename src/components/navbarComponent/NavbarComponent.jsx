import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
	return (
		<Container fluid className="position-fixed z-3">
			<Row>
				<Navbar expand="lg" className="bg-body-tertiary">
					<Container fluid>
						<Navbar.Brand href="#">La Pizzeria</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: "100px" }}
								navbarScroll
							>
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action3">Chi siamo</Nav.Link>
								<Nav.Link href="#action4">Info allergeni</Nav.Link>
								<Nav.Link href="#action2">il tuo ordine</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Row>
		</Container>
	);
};

export default NavbarComponent;
