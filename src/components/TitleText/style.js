import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0, auto;
`;
export const Text = styled.h2`
  color: black;
  font-size: 1.5rem;
  text-align: center;
  font-weight:bold;
  margin-top: 4px;

  @media(max-width: 768px){
    font-size: 1.4rem;
  }
`;
