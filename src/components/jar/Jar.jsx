import { Link } from "react-router-dom";
import "./jar.css";

const Jar = () => {
	return (
		<Link className="text-decoration-none" to={"/"}>
			<div className="mx-5 boxJar">
				<div className="headJar"></div>
				<div className="sideJarR"></div>
				<div className="sideJarL"></div>
				<div className="sideJarWhiteR"></div>
				<div className="sideJarWhiteL"></div>
				<div className="bodyJar"></div>
			</div>
			<span className="title">La Grande Giara</span>
		</Link>
	);
};

export default Jar;
