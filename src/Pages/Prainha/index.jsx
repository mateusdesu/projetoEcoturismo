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
        <Title>Prainha</Title>
        <Description>
          Excelente para encontrar quiosques prontinhos para servir uma deliciosa
          refeição, é o cartão postal da cidade. Logo que você chega se depara
          com essa belezura! Sem falar no Mirante que foi construído
          recentemente para trazer mais beleza ao local. É a praia escolhida
          pelas famílias, tem mergulho, fotos em Standart, Banana Boat e uma
          feirinha. No cantinho tem uma pequena trilha que vai ate a Graçainha
          local ideal uma pesca artesanal com linha e anzol.
        </Description>
      </InfoContainer>
    </Container>
  );
};
