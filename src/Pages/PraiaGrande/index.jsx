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
import image from "../../assets/images/SobrePraiaGrande.jpeg";

export const PraiaGrande = () => {
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
        <Title>Praia Grande</Title>
        <Description>
          Praia com grande extensão de terra que propicia as mais diversificadas
          práticas esportivas como: surf, vôlei, futsal, passeios de
          quadriciclo e buggy. Suas águas são bem geladas e podemos admirar no
          final do dia um magnífico pôr-do-sol. Em sua orla tem uma estátua da
          atriz, cabista, Flávia Alessandra. Também pode se passear na trilha
          que da acesso ao Deck dos pescadores, Janela do paraíso e Casa do
          Vigia, local que fica o vigia para sinalizar ao pescador quando o
          cardume está chegando.
        </Description>
      </InfoContainer>
    </Container>
  );
};
