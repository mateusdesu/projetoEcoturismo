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
import image from "../../assets/images/ColetaSeletiva.png";

export const ColetaSeletiva = () => {
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
        <Bar/>
        <Title>Coleta Seletiva</Title>
        <Description>
          Voluntários retiraram mais de 400 kg de lixo de praias
          de Arraial do Cabo e Cabo Frio, na Região dos Lagos do Rio, neste fim
          de semana. As ações marcaram o Dia Mundial de Limpeza de Mares e Rios,
          celebrado sempre no terceiro sábado do mês de setembro. As ações
          aconteceram no sábado (18) e domingo (19). Em Arraial do Cabo, a ação
          foi realizada pela Associação da Reserva Extrativista Marinha de
          Arraial do Cabo (Aremac) e pelo Projeto Mar Sem Lixo. Na cidade, a
          ação aconteceu em quatro praias: a Praia Grande, Forno, Anjos e as
          Prainhas do Pontal do Atalaia, em uma ação que também reuniu
          voluntários da “Eco Trilhas”, do movimento “Preserve Arraial do Cabo”,
          da Guarda Mirim de Arraial do Cabo, com apoio da Marinha do Brasil e
          da Secretaria Municipal de Meio Ambiente. Garrafas pet, descartáveis
          de uso individual, como talheres de plástico, pratinhos, copos,
          canudos e sacolas; além de latas de alumínio e guimbas de cigarro,
          foram recolhidas das areias e das áreas de restinga em uma ação que
          reuniu mais de 50 pessoas. Todo o material foi levado para a usina de
          reciclagem de Arraial do Cabo. “A população está crescendo, a poluição
          está crescendo e o descarte irregular está crescendo. Todas as praias,
          hoje, do planeta estão poluídas por detritos plásticos. E isso aqui é
          só a ponta do iceberg. A gente não consegue ver o lixo que está nos
          oceanos. A gente só vê o lixo que está nas praias. A situação é cada
          vez mais grave”, alertou o presidente do Projeto Mar Sem Lixo, Roberto
          Ramos. O Projeto Coral Vivo, da Rede Biomar, também realizou ações em
          Arraial e Cabo Frio. Um dos locais que recebeu o mutirão foi a Praia
          do Peró. A ação foi em conjunto com o Projeto Albatroz, patrocinado
          pela Petrobras, e reuniu também integrantes do Programa Bandeira Azul
          de Cabo Frio. No total, foram recolhidos 80 kg de lixo em quatro
          pontos diferentes de coleta no Peró. Resíduos sólidos encontrados na
          Praia dos Anjos: Garrafa plástica de água, latinha de refrigerante,
          papel alumínio, tampinha de pet, Caixa d epapelao, copo descartável,
          pote de sorvete, sacola plástica, garrafa de vidro de long neck, casca
          de banana, pedaço de frango, caixa de papelao, copo de vidro quebrado,
          tampa de panela, bandeja de metal, casca de banana,
        </Description>
      </InfoContainer>
    </Container>
  );
};
