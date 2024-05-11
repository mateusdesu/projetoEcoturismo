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
import image from "../../assets/images/SobrePraiaDoPontal.jpg";

export const PraiaDoPontal = () => {
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
        <Title>Bora? Partiu Praia do Pontal?</Title>
        <Description>
          Bem-vindo, viajante, eu sou aquela que lhe trará alegria com seus
          familiares, venha desfrutar de um maravilhoso churrasco em minhas
          águas calmas e ambiente sereno. Quero te convidar para me tratar como
          os povos originários, numa relação de harmonia e respeito. Não
          descarregue todas suas frustrações em mim. Crie um ambiente bonito,
          limpo e delicado, porque nossos olhos gostam de apreciar o belo. Não
          se iguale aquele que não consegue encontrar o seu lugar em seu lar: a
          Terra.
        </Description>
      </InfoContainer>
    </Container>
  );
};
