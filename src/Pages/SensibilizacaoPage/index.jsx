import { Header } from "../../components/Header";
import { Nav3 } from "../../components/Nav";
import { ImageContainer } from "../../components/ImageContainer";
import {TitleText} from "../../components/TitleText"
import { Wrapper } from "../../components/Wrapper/style";
import image from "../../assets/images/Sensibilizacao.png";
import { Link } from "react-router-dom"

export const SensibilizacaoPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav3 />
      <TitleText title ="Ecoturismo consciente"/>
      <Link to={"/coleta-seletiva"}>
      <ImageContainer
        title="Sobre Arraial do Cabo"
        src={image}
      />
      </Link>
    </Wrapper>
  );
};
