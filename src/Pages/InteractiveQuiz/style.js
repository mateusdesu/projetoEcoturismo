import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: base-line;
  justify-content: space-between;
  flex-direction: row;
  background-color: #E7E7E7D1;
  height: 50px;
  margin: 0 4px 0 4px;
  border-radius: 8px;
  padding: 8px;
`;


export const Container = styled.div`
  display:flex
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:4px;
  background-color: #A6BBDE99;
  width:100%;
  height:100vh;
`;

export const Iframe = styled.iframe`
    margin: 2rem auto;
    width: 800px;
    height: 550px;
    border-radius: 4px;
    
    @media (max-width: 768px) {
      width: 90%;
      height: 400px;
    }`

export const IframeContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-top:2rem;
    }
    
`