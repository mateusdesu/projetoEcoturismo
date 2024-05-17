import { Header } from "../../components/Header";
import { Nav2 } from "../../components/Nav";
import {CityCarousel} from "../../components/Carousel";
import { Wrapper } from "../../components/Wrapper/style";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav2 />
      <CityCarousel />
    </Wrapper>
  );
};
