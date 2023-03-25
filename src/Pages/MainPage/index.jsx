import { Header } from "../../components/Header";
import { Nav1 } from "../../components/Nav";
import { ImageContainer } from "../../components/ImageContainer";
import {TitleText} from "../../components/TitleText"
import { Wrapper } from "../../components/Wrapper/style";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav1 />
      <ImageContainer
        title="Sobre Arraial do Cabo"
        src="https://i.pinimg.com/564x/07/a3/de/07a3ded6c6e37707c23b370b9204814b.jpg"
      />
      <TitleText title ="Sobre Arraial"/>
    </Wrapper>
  );
};
