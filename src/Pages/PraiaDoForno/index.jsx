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
import image from "../../assets/images/praiaDoForno2.jpg";

export const PraiaDoForno = () => {
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
        <Title>Bora? Partiu Praia do Forno?</Title>
        <Description>
          Bem-vindo, querido visitante, prometo-lhe encher sua alma de encanto e
          admiração com meu mar translúcido e minha vegetação nativa, mas, meu
          amigo, enquanto desfruta dessa experiência única, lembre-se da
          educação ambiental: recolha seu lixo, pratique a sustentabilidade e
          ajude a conservar meu paraíso para as gerações futuras. Juntos,
          podemos mergulhar no meu santuário de beleza, garantir que minhas
          riquezas sejam apreciadas por muitos anos e transformando a forma de
          pensar de muitos. Você está comigo? Espero que sim! Confio em você,
          meu protetor!
        </Description>
      </InfoContainer>
    </Container>
  );
};
