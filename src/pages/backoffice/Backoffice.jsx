import "./backoffice.css";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, getListProducts } from "../../reducers/productReducer";
import SearchbarBackoffice from "../../components/searchbarBackoffice/SearchbarBackoffice";
import CardProduct from "../../components/cardProduct/CardProduct";

export const Backoffice = () => {
	const completeListProducts = useSelector(allProducts);
	const dispatch = useDispatch();
	const [listProducts, setListProducts] = useState([]);
	const [categoryFromChild, setCategoryFromChild] = useState("");

	//functions

	const handleDataFromChild = (dataChild) => {
		setCategoryFromChild(dataChild);
	};
	useEffect(() => {
		dispatch(getListProducts());
	}, [dispatch]);

	const onFilterProducts = useCallback(
		(category) => {
			let productsFiltered = [];
			if (completeListProducts && completeListProducts.products) {
				productsFiltered = completeListProducts.products.filter((p) =>
					p.typology.includes(category)
				);
				setListProducts(productsFiltered);
			}
		},
		[completeListProducts]
	);

	useEffect(() => {
		onFilterProducts(categoryFromChild);
	}, [categoryFromChild, completeListProducts]);

	return (
		<>
			<SearchbarBackoffice onSendData={handleDataFromChild} />
			<div id="containerProducts" className="d-flex justify-content-around">
				<div className="bg-pizzeria">
					<div className="d-flex flex-wrap justify-content-center">
						{listProducts &&
							listProducts.map((p, i) => {
								return (
									<CardProduct
										key={i}
										productName={p.productName}
										img={p.img}
										ingredients={p.ingredients}
										price={p.price}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};
