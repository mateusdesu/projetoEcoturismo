import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  margin: 2rem auto;
  width: 800px;
  height: 450px;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-top: 64px;
    width: 500px;
    height: 300px;
  }
`;

export const QuizLink = styled(Link)`
  display:flex;
  align-items:center;
  justify-content: center;
`;
