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
import image from "../../assets/images/SobreArraialDesc.png";

export const SobreArraial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <FaAngleLeft size={"2em"} onClick={() => navigate(-1)} />
      </Header>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <InfoContainer>
        <Bar />
        <Title>Arraial do Cabo</Title>
        <Description>
          Esta situado na Região dos Lagos do estado do Rio de Janeiro. Trata-se
          de uma cidade costeira, possuindo uma altitude média de apenas oito
          metros. Fundada em 1503 pelo conquistador Américo Vespúcio, foi
          elevada à categoria de município apenas em 1985, após sua emancipação
          do município vizinho de Cabo Frio. Em 2014 tinha uma população de 28
          866 habitantes segundo o IBGE. As rodovias que servem o município são
          a RJ-140/BR-120 e a RJ-102.
        </Description>
      </InfoContainer>
    </Container>
  );
};
