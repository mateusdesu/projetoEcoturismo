import { Header } from "../../components/Header";
import { Nav4 } from "../../components/Nav";
import { Wrapper } from "../../components/Wrapper/style";
import image from "../../assets/images/Quiz2.png"
import {Image,QuizLink} from "./style.js"

export const QuizPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav4 />
      <QuizLink to="../quiz-interativo">
      <Image src={image}></Image>
      </QuizLink>
    </Wrapper>
  );
};
