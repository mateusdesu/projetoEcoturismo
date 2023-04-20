import {
  Container,
  Bar,
  Header,
  Image,
  ImageContainer,
  InfoContainer,
  Title,
  Description
} from "./style";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/SobreAsPrainhasDoPontalDoAtalaia.jpg";

export const AsPrainhasDoPontalDoAtalaia = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <FaAngleLeft
          size={"2em"}
          cursor={"pointer"}
          onClick={() => navigate(-1)}
        />
      </Header>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfoContainer>
        <Bar />
        <Title>As Prainhas do Pontal do Atalaia</Title>
        <Description>
          Conhecida por sua escadaria, seu acesso é tanto pelo mar quanto pela
          trilha do Pontal do Atalaia, que se pode fazer tanto de carro quanto a
          pé, a caminhada leva mais ou menos 2 horas, nessa praia temos a Gruta
          do Amor, a mais procuradas pelos casais que não querem se separar,
          dizem as más línguas, que se o casal se beijar em frente a gruta ou
          dentro dela, nunca mais se separa. E aí? No passeio de barco ao acesso
          a essa praia também pode se conhecer a Gruta Azul, indescritível,
          somente estando pertinho para tirar suas conclusões, tamanha beleza do
          local.
        </Description>
      </InfoContainer>
    </Container>
  );
};
