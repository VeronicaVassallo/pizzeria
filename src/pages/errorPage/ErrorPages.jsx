import { Link } from "react-router-dom";

export const ErrorPage = () => {
	return (
		<div>
			<h2>Errore la Pagina non esiste</h2>
			<p>
				<Link to={"/"}>torna indietro</Link>
			</p>
		</div>
	);
};
