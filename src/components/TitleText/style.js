import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;
export const Text = styled.h2`
  color: black;
  font-size: 1.5rem;
  text-align: center;
  font-weight:bold;

  @media(max-width: 768px){
    font-size: 1.4rem;
  }
`;
