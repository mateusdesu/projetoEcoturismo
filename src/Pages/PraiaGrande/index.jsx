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
        <Title>Bora? Partiu Praia grande?</Title>
        <Description>
          Olá, querido visitante, eu sou a Praia Grande e minha missão é a
          preservação da vida e de todo meu ambiente, também lhe convido para
          participar dessa missão! Vamos? Cuidaremos dos recifes de corais, das
          tartarugas que passeiam no seu lar, dos peixes que nos apresentam uma
          linda dança, das aves que bailam no entardecer. Aqui a educação
          ambiental, a sustentabilidade e o respeito com a natureza é o nosso
          compromisso. Vamos nos tornar guardião de todas essas riquezas?
        </Description>
      </InfoContainer>
    </Container>
  );
};
