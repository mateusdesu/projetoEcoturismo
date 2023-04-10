import { Header } from "../../components/Header";
import { Nav4 } from "../../components/Nav";
import { Wrapper } from "../../components/Wrapper/style";
import { Iframe } from "./style.js"

export const QuizPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav4 />
      <Iframe src="https://wordwall.net/pt/embed/d49442afebf040bc86b3d827bcb135e5?themeId=1&templateId=5&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></Iframe>
    </Wrapper>
  );
};
