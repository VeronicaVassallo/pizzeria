import { CarSection } from "../../components/cardSectionMenu/CardSection";
import { dataSectionMenu } from "../../data/sectionMenu";
import Header from "../../components/header/Header";
import NavbarComponent from "../../components/navbarComponent/NavbarComponent";

const Home = () => {
	return (
		<div>
			<NavbarComponent />
			<Header />
			<div className="d-flex">
				{dataSectionMenu.map((data) => (
					<CarSection
						routeCard={data.type}
						label={data.label}
						img={data.img}
						altimg={data.type}
					></CarSection>
				))}
			</div>
		</div>
	);
};

export default Home;
