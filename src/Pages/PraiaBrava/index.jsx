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
import image from "../../assets/images/SobrePraiaBrava.jpg";

export const PraiaBrava = () => {
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
        <Title>Bora? Partiu Praia Brava?</Title>
        <Description>
          Oi, eu sou a Praia Brava, em Arraial do Cabo, e vou lhes contar um
          segredo: eu sou amada por aqueles que apreciam a solidão e são
          destemidos, pois minhas águas agitadas e a dificuldade de se chegar
          até mim são refúgios para alguns. Por isso faço-lhes um apelo me trate
          com respeito e cuidado: recolha seu lixo, não destrua minha flora e
          fauna e o mais importante, mantenha-me segura daqueles que não
          conseguem me enxergar como uma deusa da beleza e da solidão.
        </Description>
      </InfoContainer>
    </Container>
  );
};
