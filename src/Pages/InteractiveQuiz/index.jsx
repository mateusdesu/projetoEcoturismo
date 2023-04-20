import { Header,Container,Iframe,IframeContainer} from "./style";
import { FaAngleLeft, } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export const InteractiveQuiz = () => {
    const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <FaAngleLeft cursor={"pointer"} size={"2em"} onClick={() => navigate(-1)}/>
        <></>
      </Header>
      <IframeContainer>
      <Iframe src="https://wordwall.net/pt/embed/d49442afebf040bc86b3d827bcb135e5?themeId=1&templateId=5&fontStackId=0" width="400" height="280" frameborder="0" allowfullscreen></Iframe>
      </IframeContainer>
    </Container>
  );
};
