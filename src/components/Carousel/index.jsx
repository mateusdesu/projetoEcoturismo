import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageContainer } from "../ImageContainer";
import { TitleText } from "../../components/TitleText";
import PraiaDosAnjos from "../../assets/images/PraiaDosAnjos.png";
import PraiaDoForno from "../../assets/images/PraiaDoForno.png";
import PraiaDoFarol from "../../assets/images/PraiaDoFarol.png";
import AsPrainhasDoPontalDoAtalaia from "../../assets/images/AsPrainhasDoPontalDoAtalaia.png";
import PraiaGrande from "../../assets/images/PraiaGrande.png";
import Prainha from "../../assets/images/Prainha.png";
import PraiaDoPontal from "../../assets/images/PraiaDoPontal.png";
import { Link } from "react-router-dom";

function UncontrolledExample() {
  return (
    <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <TitleText title="Praia dos Anjos" />
        <Link to="/praia-dos-anjos">
          <ImageContainer src={PraiaDosAnjos} alt="Praia dos Anjos" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="Praia do Forno" />
        <Link to="/praia-do-forno">
          <ImageContainer src={PraiaDoForno} alt="Praia do Forno" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="Praia do Farol" />
        <Link to="/praia-do-farol">
          <ImageContainer src={PraiaDoFarol} alt="Praia do Farol" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="As Prainhas do Pontal do Atalaia" />
        <Link to="/as-prainhas-do-pontal-do-atalaia">
          <ImageContainer
            src={AsPrainhasDoPontalDoAtalaia}
            alt="As prainhas do pontal do atalaia"
          />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="Praia Grande" />
        <Link to="/praia-grande">
          <ImageContainer src={PraiaGrande} alt="Praia Grande" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="Prainha" />
        <Link to="/prainha">
          <ImageContainer src={Prainha} alt="Prainha" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <TitleText title="Praia do Pontal" />
        <Link to="/praia-do-pontal">
          <ImageContainer src={PraiaDoPontal} alt="Praia do Pontal" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
