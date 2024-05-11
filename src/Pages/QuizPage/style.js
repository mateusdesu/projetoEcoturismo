import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  margin: 2rem auto;
  width: auto;
  height: 420px;
  border-radius: 4px;

  @media (max-width: 768px) {
    align-items:center;
    justify-content:center;
    width: auto;
    height: 300px;
  }
`;

export const QuizLink = styled(Link)`
  display:flex;
  align-items:center;
  justify-content: center;
`;
