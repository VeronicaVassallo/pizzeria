import "./cardProduct.css";
const CardProduct = (props) => {
	let rgb = () => {
		let r = Math.floor(Math.random() * 202);
		let g = Math.floor(Math.random() * 202);
		let b = Math.floor(Math.random() * 202);
		return `rgb(${r}, ${g}, ${b})`;
	};

	return (
		<div className="d-flex card-container">
			<div className="card-container-img">
				<img
					src={
						props.img ||
						"https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/10/come-riconoscere-una-buona-pizza-1200x675.jpg"
					}
					alt={props.productName}
				/>
			</div>
			<div
				className="text-center text-light w-100 pt-2 px-2"
				style={{ backgroundColor: rgb() }}
			>
				<h4>{props.productName}</h4>
				<p> ingredienti: {props.ingredients}</p>
				<h5> prezzo: {props.price}€</h5>
			</div>
		</div>
	);
};
export default CardProduct;
