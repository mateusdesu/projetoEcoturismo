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
      <TitleText title ="A Cidade de Arraial do Cabo"/>
      <Link to="/sobre-arraial">
      <ImageContainer
        title="A Cidade de Arraial do Cabo"
        src={image}
      />
      </Link>
      
    </Wrapper>
  );
};
