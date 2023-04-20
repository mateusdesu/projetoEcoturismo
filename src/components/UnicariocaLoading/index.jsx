import styled from "styled-components";
import unicarioca from "../../assets/images/unicarioca.png";
import nucap from "../../assets/images/nucap.png";

const UniDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: row;
  font-weight:700;
  margin-top:150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

const Image = styled.img`
  width: 300px;
  height: 280px;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    margin-left: 18px;
    
  }

`
const Image2 = styled.img`
  width: 300px;
  height: 150px;

  @media (max-width: 768px) {
    margin-top:32px;
    width: 200px;
    height: 85px;
    
  }

`

export const UnicariocaLoading = () => {
  return (
    <UniDiv>
      <Image src={unicarioca} alt="UniCarioca" />
      <Image2 src={nucap} alt="NUCAP" />
    
    </UniDiv>
  );
};
