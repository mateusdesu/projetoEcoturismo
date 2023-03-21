import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageContainer } from "../ImageContainer";
import { TitleText } from "../../components/TitleText";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ImageContainer
          src="https://i.pinimg.com/564x/8f/2b/48/8f2b48a91333bda21c0833c00ec58861.jpg"
          alt="Praia do Forno"
        />

        <TitleText title="Praia do Forno" />
      </Carousel.Item>
      <Carousel.Item>
        
        <ImageContainer
          src="https://i.pinimg.com/564x/65/a1/0b/65a10bdae92d2ac670bf804adfd15d9c.jpg"
          alt="Praia dos Anjos"
        />

        <TitleText title="Praia dos Anjos" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
