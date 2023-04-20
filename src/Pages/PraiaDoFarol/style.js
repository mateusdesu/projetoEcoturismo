import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #E7E7E7D1;
  height: 50px;
  margin: 0 4px 0 4px;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  background: url(../../assets/images/SobrePraiaDoForno.png) fixed no-repeat;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
`;

export const Image = styled.img`
  height: 320px;
  width: 400px;
  
 
  @media (max-width: 768px) {
    width: 280px;
    height: 220px;
    
  }
`;

export const Container = styled.div`
  display:flex ;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding:4px;
  background-color: #A6BBDE99;
  width:100%;
  height:100vh;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #E7E7E7D1;
  border-radius: 16px;
  padding: 8px;
  height: 60%;

  
`;

export const Bar = styled.div`
  background-color: #1E1E1E99;
  width: 150px;
  height: 12px;
  border-radius: 50px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: flex-start;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  font-size: 20px;
  line-height: 20px;
  overflow-y: none;
  text-align: justify;
  padding: 8px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 22px;
  }
  `