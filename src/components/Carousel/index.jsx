import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImageContainer } from "../ImageContainer";
import { TitleText } from "../../components/TitleText";
import PraiaDosAnjos from "../../assets/images/PraiaDosAnjos.png";
import PraiaDoForno from "../../assets/images/PraiaDoForno.png";
import PraiaDoFarol from "../../assets/images/PraiaDoFarol.png"
import AsPrainhasDoPontalDoAtalaia from "../../assets/images/AsPrainhasDoPontalDoAtalaia.png"
import PraiaGrande from "../../assets/images/PraiaGrande.png"
import Prainha from "../../assets/images/Prainha.png"
import PraiaDoPontal from "../../assets/images/PraiaDoPontal.png"
import {Link} from "react-router-dom"

function UncontrolledExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Link to="/praia-dos-anjos">
        <ImageContainer
          src={PraiaDosAnjos}
          alt="Praia dos Anjos"
        />
        </Link>
        <TitleText title="Praia dos Anjos" />
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/praia-do-forno">
        <ImageContainer
          src={PraiaDoForno}
          alt="Praia do Forno"
        />
          </Link>
        <TitleText title="Praia do Forno" />
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/praia-do-farol">
        <ImageContainer
          src={PraiaDoFarol}
          alt="Praia do Farol"
        />
        </Link>
        <TitleText title="Praia do Farol" />
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/as-prainhas-do-pontal-do-atalaia">
        <ImageContainer
          src={AsPrainhasDoPontalDoAtalaia}
          alt="As prainhas do pontal do atalaia"
        />
        </Link>
        <TitleText title="As Prainhas do Pontal do Atalaia" />
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/praia-grande">
        <ImageContainer
          src={PraiaGrande}
          alt="Praia Grande"
        />
        </Link>
        <TitleText title="Praia Grande" />
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/prainha">
        <ImageContainer
          src={Prainha}
          alt="Prainha"
        />
        </Link>
        <TitleText title="Prainha" />
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/praia-do-pontal">
        <ImageContainer
          src={PraiaDoPontal}
          alt="Praia do Pontal"
        />
        </Link>
        <TitleText title="Praia do Pontal" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
