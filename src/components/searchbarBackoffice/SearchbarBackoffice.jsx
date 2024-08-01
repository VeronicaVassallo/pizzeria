import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormAddProduct from "../formAddProduct/FormAddProduct";

const SearchbarBackoffice = ({ onSendData }) => {
	const [typology, setTypology] = useState("");

	const sendDataToParet = () => {
		onSendData(typology);
	};

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="#">La Pizzeria</Navbar.Brand>
				<h2>BACKOFFICE</h2>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<FormAddProduct />
					</Nav>
					<Form className="d-flex mx-5">
						<label htmlFor="typology">Categoria:</label>
						<br />
						<select
							className="me-5"
							value={typology || ""}
							name="typology"
							id="typology"
							onChange={(e) => setTypology(e.target.value)}
						>
							<option value="">tutte</option>
							<option value="antipasto">antipasto</option>
							<option value="contorno">contorno</option>
							<option value="pizza">pizza</option>
							<option value="primo">primo</option>
							<option value="secondo">secondo</option>
							<option value="bibita">bibita</option>
							<option value="dessert">dessert</option>
						</select>
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success" onClick={sendDataToParet}>
							Cerca
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default SearchbarBackoffice;
