import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, getListProducts } from "../../reducers/productReducer";
import SearchbarBackoffice from "../../components/searchbarBackoffice/SearchbarBackoffice";

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
			<div className="d-flex justify-content-around">
				<div>
					<p>Lista prodotti</p>
					<ul>
						{listProducts &&
							listProducts.map((p, i) => {
								return <li key={i}>{p.productName}</li>;
							})}
					</ul>
				</div>
			</div>
		</>
	);
};
