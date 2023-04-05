import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageContainer } from "../ImageContainer";
import { TitleText } from "../../components/TitleText";
import PraiaDosAnjos from "../../assets/images/PraiaDosAnjos.png";
import PraiaDoForno from "../../assets/images/PraiaDoForno.png";

function UncontrolledExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <ImageContainer
          src={PraiaDoForno}
          alt="Praia do Forno"
        />

        <TitleText title="Praia do Forno" />
      </Carousel.Item>
      <Carousel.Item>
        
        <ImageContainer
          src={PraiaDosAnjos}
          alt="Praia dos Anjos"
        />

        <TitleText title="Praia dos Anjos" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
