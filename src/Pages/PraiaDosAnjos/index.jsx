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
import image from "../../assets/images/praiaDosAnjos2.jpg";

export const PraiaDosAnjos = () => {
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
        <Title>Bora? Partiu Praia dos Anjos?</Title>
        <Description>
          Eu sou a Praia dos Anjos e me sinto muito honrada por você está aqui
          para contemplar todas as formas de vida que em mim circundam. Durante
          o dia, sinto uma felicidade imensa ao ter as crianças correndo e as
          famílias sorrindo, mas infelizmente também sinto uma dor profunda
          quando o lixo humano é abandonado sujando minhas areias, minhas
          encostas e ameaçando minha vida marinha. Peço a Deus que perdoe os
          humanos, pois não sabem o que fazem! Não entendem a importância de me
          proteger e de me preservar!
        </Description>
      </InfoContainer>
    </Container>
  );
};
