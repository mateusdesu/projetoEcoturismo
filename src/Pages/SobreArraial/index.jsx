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
        <Title>Bora? Partiu Arraial do Cabo? </Title>
        <Description>
          Olá, sou Arraial do Cabo! Sou a cidade anfitriã e guardiã das belezas
          naturais que em mim se encontram. À medida que crescemos,
          turisticamente, convido, você, a me conhecer, pois aqui vivem
          extrativistas que tiram o seu sustento da pesca; moradores que
          dependem de um turismo sustentável para prosseguir com seus serviços e
          o mais especial, você, que veio desfrutar das minhas belezas, porque é
          tudo isso é meu, é seu e de todos aqueles que aqui virão. Então, cuide
          de mim! E olhe: não se esqueça de sempre carregar seu lixo até um
          lugar apropriado de despejo, evitando assim transtornos para você e
          para mim.
        </Description>
      </InfoContainer>
    </Container>
  );
};
