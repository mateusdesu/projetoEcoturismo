import {
  Container,
  Bar,
  Header,
  Image,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
} from "./style";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/SobrePrainha.jpg";

export const Prainha = () => {
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
        <Title>Bora? Partiu Prainha?</Title>
        <Description>
          Oi, como vocês estão? Eu sou a Prainha e me sinto muito honrada de
          tê-los aqui no meu santuário sagrado. Guardo tesouros que vocês não
          podem imaginar! Venham mergulhar nas minhas profundezas e descobrirão
          toda riqueza marinha que eu preservo. Agora faço um apelo: eu sou um
          bem de valor inestimável, então me trate com respeito e com devido
          apreço: recolha seu lixo e o despeje até um local seguro, evitando que
          chegue as minhas águas e impacte negativamente na minha vida marinha.
          Salve-me!
        </Description>
      </InfoContainer>
    </Container>
  );
};
