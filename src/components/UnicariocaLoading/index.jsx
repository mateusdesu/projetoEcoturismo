import styled from "styled-components";

const UniDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:700;
  font-size: 32px;
  margin-top:20px;
`;

const TextHighlight = styled.span`
    color:red;
`
export const UnicariocaLoading = () => {
  return (
    <UniDiv>
      <h1>Nucap - Uni<TextHighlight>Carioca</TextHighlight></h1>
    </UniDiv>
  );
};
