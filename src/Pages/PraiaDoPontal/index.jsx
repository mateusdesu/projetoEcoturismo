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
        <Title>Praia do Pontal</Title>
        <Description>
          Dentro da antiga área da Companhia Nacional da Álcalis, logo após a
          entrada do Pórtico: EU AMO ARRAIAL, ideal para crianças, idosos e
          famílias que gostam daquele delicioso churrasco a beira mar embaixo
          das casuarinas, onde também conseguimos admirar as canoas e paios dos
          pescasdores artesanais. Na sua extensão tem a Lagoa Vermelha ideal
          para prática de kitesurf, acessos para passeios de buggy, um pequeno
          camping particular para acampamento e bastante áreas para corridas e
          caminhadas.
        </Description>
      </InfoContainer>
    </Container>
  );
};
