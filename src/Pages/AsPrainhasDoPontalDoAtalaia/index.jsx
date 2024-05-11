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
        <Title>Bora? Partiu As Prainhas do Pontal do Atalaia?</Title>
        <Description>
          Oi, que bom que você esteja por aqui! Gostaria de lhe convidar para
          ser mais um guardião das minhas areias macias e águas cristalinas.
          Quero que você contemple meu santuário de vida terrestre e marinha e
          seja mais um herdeiro de toda essa beleza. Desejo que aqueles que me
          visitem reconheçam a minha beleza e me tratem com respeito que mereço:
          não poluindo meus mares, minhas areias e minhas encostas. Me preserve
          para as gerações futuras! Gratidão!
        </Description>
      </InfoContainer>
    </Container>
  );
};
