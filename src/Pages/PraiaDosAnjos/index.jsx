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
import image from "../../assets/images/SobrePraiaDosAnjos.png";

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
        <Title>Praia dos Anjos</Title>
        <Description>
          O visual da Praia dos Anjos atrai pelo bucólico
          conjunto de barcos, onde durante todo o dia pescadores voltam do mar
          carregados de peixes para o mercado. A praia, apesar de não ser a mais
          indicada para banho, certamente está entre as mais importantes e
          movimentadas da região. Foi na areia da Praia dos Anjos que Américo
          Vespúcio aportou em 1503 para dar início à colonização da região. Ali
          foi erguida a Igreja Nossa Senhora dos Remédios, onde aconteceu a
          primeira missa fechada do Brasil. A igreja permanece no local até hoje
          e divide espaço com um grande número de turistas que seguem para os
          passeios de barco, para a trilha do Forno e para os bares e
          restaurantes locais. A atração da Praia dos Anjos não se restringe ao
          banho de mar. De lá, partem os tours que levam os visitantes para
          conhecer a sonhada Praia do Farol. Enquanto esperam o momento do
          embarque, eles poderão curtir as tartarugas que permanecem próximas ao
          cais em busca dos peixes que sobram dos barcos que chegam repletos do
          mar. Também está na Praia dos Anjos uma das mais movimentadas praças
          da região, onde bares e shows atraem um grande público durante o
          verão. Quem deseja ir até a Praia do Forno ou às Prainhas de barco
          também irá passar pela Praia dos Anjos. Os barcos que fazem o trajeto
          até as duas praias partem de lá. Aos que passam a noite em claro e
          desejam ver um lindo nascer do sol, o melhor ponto da cidade para tal
          apreciação é a Praia dos Anjos. O amanhecer ganha lindos contornos com
          os barcos que parecem dançar sobre a água enquanto o céu muda de cor.
          O acesso à Praia dos Anjos é tranquilo. Não há trilhas a percorrer e
          há muitas vagas para estacionar nas ruas próximas.
        </Description>
      </InfoContainer>
    </Container>
  );
};
