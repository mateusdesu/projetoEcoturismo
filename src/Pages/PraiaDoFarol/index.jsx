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
import image from "../../assets/images/SobrePraiaDoFarol.png";

export const PraiaDoFarol = () => {
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
        <Title>Praia do Farol</Title>
        <Description>
          Está no ranking das mais lindas praias do Brasil pela harmonia e
          perfeição das suas areias brancas, mar translúcido e fenômeno da
          Ressurgência que privilegia o local com a mais variada biodiversidade
          marinha, seu acesso é somente pelo mar. Essa belíssima praia é
          protegida pela Marinha do Brasil e precisa-se de autorização para
          visitá-la, assim também precisa da autorização para fazer a trilha do
          Farol Velho, ponto mais alto da Cidade que leva em torno de 1h30 para
          subir matas virgens e fechadas, mas o visual vale muito a pena! Uma
          vista panorâmica fantástica de toda Cidade.
        </Description>
      </InfoContainer>
    </Container>
  );
};
