import "./cardSection.css";
import { Link } from "react-router-dom";

export const CarSection = (prop) => {
	return (
		<div className="menu mx-5">
			<Link className="text-decoration-none" to={prop.routeCard}>
				<h4 className="card__title">{prop.label}</h4>
				<img src={prop.img} alt={prop.altImg} />
			</Link>
		</div>
	);
};
