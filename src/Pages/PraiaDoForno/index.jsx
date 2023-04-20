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
import image from "../../assets/images/SobrePraiaDoForno.png";

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
        <Title>Praia do Forno</Title>
        <Description>
          A trilha escondida no final da Praia dos Anjos leva a
          um dos mais incríveis paraísos de Arraial do Cabo. O esforço da subida
          será rapidamente recompensado ao avistar o mirante que permite uma
          vista paradisíaca da cidade. A Praia do Forno é um dos principais
          cartões de Arraial do Cabo e não é para menos. O colorido da água na
          enseada e a faixa de areia branca cercada pela exuberante vegetação
          formam um cenário digno de muitas fotos. O caminho até a praia só pode
          ser feito a pé ou de barco. A trilha, apesar de ter uma subida puxada,
          pode ser percorrida em menos de 20 minutos e sem grandes sacrifícios.
          Vale ficar atento às pedras, que em dias de chuva ficam escorregadias
          e tombos são frequentes. Ao terminar a subida, os visitantes se
          deparam com um mirante, onde um banquinho estrategicamente posicionado
          permite a apreciação da paisagem. Difícil sair de lá! Mas, por
          incrível que pareça, você será ainda mais feliz com os pés na areia.
          Quem preferir não enfrentar a trilha (ela é fácil, acredite) poderá ir
          de barco a partir da Praia dos Anjos. O custo é de R$ 10 por trecho. A
          Praia do Forno tem aproximadamente 500 metros de extensão. A ponta
          direita é repleta de bares, carrinhos de comida, aluguel de caiaques e
          muita gente (especialmente nos finais de semana). Mas basta caminhar
          um pouco mais até o final da faixa de areia para poder curtir a Praia
          do Forno quase sem ninguém. Ela oferece um pedacinho de areia para
          quem gosta de agito e outro para os que preferem sossego.
        </Description>
      </InfoContainer>
    </Container>
  );
};
