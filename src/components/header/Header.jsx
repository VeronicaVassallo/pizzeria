import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "./header.css";

const Header = () => {
	return (
		<Container fluid className="gx-0">
			<Row className="gx-0">
				<Carousel data-bs-theme="light">
					<Carousel.Item>
						<div className="header header_img1"></div>
						<Carousel.Caption>
							<h1 className="title_header text-light">
								La Pizzeria La Grande Giara
								<br />
								<span> di Vassallo Domenico</span>
							</h1>
							<p>
								Tutte le nostre pizze nascono dalla tradizione del forno a legna
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<div className="header header_img2"></div>
						<Carousel.Caption>
							<h1 className="title_header text-light">
								La Pizzeria La Grande Giara
								<br />
								<span> di Vassallo Domenico</span>
							</h1>
							<p>Sentiti a casa in una location familiare</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<div className="header header_img3"></div>
						<Carousel.Caption>
							<h1 className="title_header text-light">
								La Pizzeria La Grande Giara
								<br />
								<span> di Vassallo Domenico</span>
							</h1>
							<p>
								Assapora la delicatezza di prodotti appositamente selezionati
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Row>
		</Container>
	);
};

export default Header;
