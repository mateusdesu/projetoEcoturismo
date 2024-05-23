import { Container, Header,CardContainer,Card,Title,Name,Contact,Bar,InfoContainer } from "./style";
import { FaAngleLeft, FaPalette, FaLaptopCode, FaUser,FaLinkedin,FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const DesenvolvedoresPage = () => {
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
      <CardContainer>
      <Card>
        <Title><FaLaptopCode/> Programação</Title>
        <InfoContainer>
        <Name><FaUser/> Mateus Lopes da Silva</Name>
        <Contact><FaEnvelope/> mateuslopes1717@gmail.com</Contact>
        <Contact><FaLinkedin/> linkedin.com/in/mateusdesu</Contact>
        </InfoContainer>
        <Bar/>
        <InfoContainer>
        <Name><FaUser/> Anderson da S. N. Júnior</Name>
        <Contact><FaEnvelope/> dev.andersonjunior@gmail.com</Contact>
        <Contact><FaLinkedin/> linkedin.com/in/andersonjuniorz</Contact>
        </InfoContainer>
      </Card>
      <Card>
      <Title><FaPalette/> Design</Title>
      <InfoContainer>
        <Name><FaUser/> Mariana Jardim Castro Belo</Name>
        <Contact><FaEnvelope/> marianabelo2002@gmail.com</Contact>
        <Contact><FaLinkedin/> linkedin.com/in/jardimmari</Contact>
        </InfoContainer>
        <Bar/>
        <InfoContainer>
        <Name><FaUser/> Vi Moreira Lessa</Name>
        <Contact><FaEnvelope/> vimolessa@gmail.com</Contact>
        <Contact><FaLinkedin/> linkedin.com/in/viola-lessa</Contact>
        </InfoContainer>
      </Card>
      </CardContainer>
    </Container>
  );
};
