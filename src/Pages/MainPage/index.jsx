import { Header } from "../../components/Header";
import { Nav1 } from "../../components/Nav";
import { ImageContainer } from "../../components/ImageContainer";
import {TitleText} from "../../components/TitleText"
import { Wrapper } from "../../components/Wrapper/style";
import image from "../../assets/images/SobreArraial.png";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav1 />
      <Link to="/sobre-arraial">
      <ImageContainer
        title="Sobre Arraial do Cabo"
        src={image}
      />
      </Link>
      <TitleText title ="Sobre Arraial"/>
    </Wrapper>
  );
};
