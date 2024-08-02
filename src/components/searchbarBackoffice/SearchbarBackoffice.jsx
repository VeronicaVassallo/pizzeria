import "./searchbarBackoffice.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormAddProduct from "../formAddProduct/FormAddProduct";
import Jar from "../jar/Jar";

const SearchbarBackoffice = ({ onSendData }) => {
	const [typology, setTypology] = useState("");
	const [search, setSearch] = useState("");

	const sendDataToParet = () => {
		onSendData(typology, search);
	};

	return (
		<Navbar
			id="navBar"
			expand="lg"
			bg="dark"
			className="bg-body-tertiary position-fixed"
		>
			<Container fluid>
				<Navbar.Brand>
					<Jar />
				</Navbar.Brand>
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
							<option value="antipasti rustici">antipasti rustici</option>
							<option value="antipasti di mare">antipasti di mare</option>
							<option value="contorno">contorno</option>
							<option value="pizza">pizza</option>
							<option value="primi">primo</option>
							<option value="secondi">secondo</option>
							<option value="bibita">bibita</option>
							<option value="birra">birra</option>
							<option value="vino">vino</option>
							<option value="dessert">dessert</option>
						</select>
						<Form.Control
							type="search"
							value={search || ""}
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							onChange={(e) => setSearch(e.target.value)}
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
