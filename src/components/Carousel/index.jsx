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
import image from "../../assets/images/SobreArraial.png";
import seliga1 from "../../assets/images/Seliga1.jpg";
import seliga2 from "../../assets/images/Seliga2.jpg";
import seliga3 from "../../assets/images/Seliga3.jpg";
import seliga4 from "../../assets/images/Seliga4.jpg";
import seliga5 from "../../assets/images/Seliga5.jpg";
import seliga6 from "../../assets/images/Seliga6.jpg";
import seliga7 from "../../assets/images/Seliga7.jpg";
import seliga8 from "../../assets/images/Seliga8.jpg";
import seliga9 from "../../assets/images/Seliga9.jpg";
import placa1 from "../../assets/images/Placa1.jpg";
import placa2 from "../../assets/images/Placa2.jpg";
import placa3 from "../../assets/images/Placa3.jpg";
import placa4 from "../../assets/images/Placa4.jpg";
import placa5 from "../../assets/images/Placa5.jpg";
import placa6 from "../../assets/images/Placa6.jpg";
import placa7 from "../../assets/images/Placa7.jpg";
import placa8 from "../../assets/images/Placa8.jpg";
import placa9 from "../../assets/images/Placa9.jpg";
import placa10 from "../../assets/images/Placa10.jpg";
import placa11 from "../../assets/images/Placa11.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const CityCarousel = () => {
  const [cityIndex, setCityIndex] = useState(0);

  // Efeito para carregar o índice do localStorage quando o componente é montado
  useEffect(() => {
    const savedCityIndex = sessionStorage.getItem("carouselCityIndex");
    if (savedCityIndex) {
      setCityIndex(parseInt(savedCityIndex, 10));
    }
  }, []);

  // Função chamada quando o carrossel é alterado
  const handleCitySelect = (selectedCityIndex) => {
    setCityIndex(selectedCityIndex);
    sessionStorage.setItem("carouselCityIndex", selectedCityIndex);
  };
  return (
    <Carousel
      activeIndex={cityIndex}
      onSelect={handleCitySelect}
      variant="dark"
      indicators={false}
    >
      <Carousel.Item>
        <TitleText title="A Cidade de Arraial do Cabo" />
        <Link to="/sobre-arraial">
          <ImageContainer src={image} alt="A Cidade de Arraial do Cabo" />
        </Link>
      </Carousel.Item>
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
};

export const TrashCarousel = () => {
  const [trashIndex, setTrashIndex] = useState(0);

  // Efeito para carregar o índice do localStorage quando o componente é montado
  useEffect(() => {
    const savedTrashIndex = sessionStorage.getItem("carouselTrashIndex");
    if (savedTrashIndex) {
      setTrashIndex(parseInt(savedTrashIndex, 10));
    }
  }, []);

  // Função chamada quando o carrossel é alterado
  const handleTrashSelect = (selectedTrashIndex) => {
    setTrashIndex(selectedTrashIndex);
    sessionStorage.setItem("carouselTrashIndex", selectedTrashIndex);
  };
  return (
    <Carousel
      activeIndex={trashIndex}
      onSelect={handleTrashSelect}
      variant="dark"
      indicators={false}
      slide={false}
    >
      <Carousel.Item>
        <ImageContainer src={seliga1} alt="Seliga1" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga2} alt="Seliga2" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga3} alt="Seliga3" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga4} alt="Seliga4" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga5} alt="Seliga5" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga6} alt="Seliga6" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga7} alt="Seliga7" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga8} alt="Seliga8" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={seliga9} alt="Seliga9" />
      </Carousel.Item>
    </Carousel>
  );
};

export const SignCarousel = () => {
  const [signIndex, setSignIndex] = useState(0);

  // Efeito para carregar o índice do localStorage quando o componente é montado
  useEffect(() => {
    const savedSignIndex = sessionStorage.getItem("carouselSignIndex");
    if (savedSignIndex) {
      setSignIndex(parseInt(savedSignIndex, 10));
    }
  }, []);

  // Função chamada quando o carrossel é alterado
  const handleSignSelect = (selectedSignIndex) => {
    setSignIndex(selectedSignIndex);
    sessionStorage.setItem("carouselSignIndex", selectedSignIndex);
  };
  return (
    <Carousel
      activeIndex={signIndex}
      onSelect={handleSignSelect}
      variant="dark"
      indicators={false}
      slide={false}
    >
      <Carousel.Item>
        <ImageContainer src={placa1} alt="placa1" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa2} alt="placa2" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa3} alt="placa3" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa4} alt="placa4" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa5} alt="placa5" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa6} alt="placa6" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa7} alt="placa7" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa8} alt="placa8" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa9} alt="placa9" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageContainer src={placa10} alt="placa10" />
      </Carousel.Item>
    </Carousel>
  );
};
