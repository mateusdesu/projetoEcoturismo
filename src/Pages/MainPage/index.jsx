import { Header } from "../../components/Header";
import { Nav1 } from "../../components/Nav";
import { ImageContainer } from "../../components/ImageContainer";
import {TitleText} from "../../components/TitleText"
import { Wrapper } from "../../components/Wrapper/style";
import image from "../../assets/images/SobreArraial.png";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav1 />
      <ImageContainer
        title="Sobre Arraial do Cabo"
        src={image}
      />
      <TitleText title ="Sobre Arraial"/>
    </Wrapper>
  );
};
