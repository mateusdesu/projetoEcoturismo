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
        <Title>Bora? Partiu Praia do Farol?</Title>
        <Description>
          Olá, meu amigo(a), eu sou a Praia do Farol e tenho muitos segredos
          desde o descobrimento do Brasil, já fui um cemitério indígena, tenho
          lendas assustadoras e já vivi com muitos faroleiros, rogo a vocês que
          me protejam, cuidando do meu entorno, recolhendo seu lixo e se
          empenhando para buscar a educação ambiental. Vamos juntos seguir os
          princípios que norteiam a sustentabilidade, preservando minhas águas e
          toda biodiversidade que em mim vive, assim desfrutarmos de um ambiente
          saudável e duradouro. Muito obrigado pelo seu compromisso e atenção.
        </Description>
      </InfoContainer>
    </Container>
  );
};
