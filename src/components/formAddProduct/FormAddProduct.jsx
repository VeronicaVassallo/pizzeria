import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormAddProduct = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [listProducts, setListProducts] = useState([]);
	//data form
	const [productName, setProductName] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [price, setPrice] = useState(0);
	const [img, setImg] = useState("");
	const [typology, setTypology] = useState("");

	const [error, setError] = useState("");

	//new Product
	let body = {
		productName: productName,
		ingredients: ingredients,
		price: price,
		img: img,
		typology: typology,
	};

	const validateForm = () => {
		if (!productName || !ingredients || !price || !typology) {
			setError("Tutti i campi devono essere compilati!");
			return false;
		}
		if (price <= 0) {
			setError("Il valore del prezzo deve essere maggiore di zero!");
			return false;
		}
		return true;
	};

	const insertData = (e) => {
		e.preventDefault();
		setError("");

		if (validateForm()) {
			setListProducts([...listProducts, body]);
			setProductName("");
			setIngredients("");
			setPrice(0);
			setImg("");
			setTypology("");
		}
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Crea prodotto
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={insertData}>
						<div>
							<label htmlFor="productName">Nome:</label>
							<br />
							<input
								type="text"
								value={productName || ""}
								name="productName"
								id="productName"
								onChange={(e) => setProductName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="ingredients">Ingredienti:</label>
							<br />
							<input
								type="text"
								value={ingredients || ""}
								name="ingredients"
								id="ingredients"
								onChange={(e) => setIngredients(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="price">Prezzo:</label>
							<br />
							<input
								type="number"
								value={price}
								name="price"
								id="price"
								onChange={(e) => setPrice(e.target.value)}
							/>{" "}
							€
						</div>
						<div>
							<label htmlFor="img">Immagine:</label>
							<br />
							<input
								type="text"
								value={img || ""}
								name="img"
								id="img"
								onChange={(e) => setImg(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="typology">Categoria:</label>
							<br />
							<select
								value={typology || ""}
								name="typology"
								id="typology"
								onChange={(e) => setTypology(e.target.value)}
							>
								<option value="antipasto">antipasto</option>
								<option value="contorno">contorno</option>
								<option value="pizza">pizza</option>
								<option value="primo">primo</option>
								<option value="secondo">secondo</option>
								<option value="bibita">bibita</option>
								<option value="dessert">dessert</option>
							</select>
						</div>
						{error && <p className="text-danger"> {error}</p>}
						<button type="submit" className="btn btn-primary">
							Salva
						</button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default FormAddProduct;
