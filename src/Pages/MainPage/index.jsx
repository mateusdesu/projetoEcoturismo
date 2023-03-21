import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { ImageContainer } from "../../components/ImageContainer";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <ImageContainer
        title="Sobre Arraial do Cabo"
        src="https://i.pinimg.com/564x/07/a3/de/07a3ded6c6e37707c23b370b9204814b.jpg"
      />
    </>
  );
};
