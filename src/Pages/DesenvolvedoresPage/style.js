import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #e7e7e7d1;
  height: 50px;
  margin: 0 4px 0 4px;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  background-color: #a6bbde99;
  width: 100%;
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;

  @media(max-width: 768px){
    flex-direction: column;
    margin-top: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  background-color: #f0f0f0;
  width: 330px;
  height: 330px;
  border-radius: 16px;
  margin: 24px;

  @media(max-width: 768px){
    width: 300px;
    height: 250px;
  }
`;

export const InfoContainer = styled.div`
  display:flex;
  align-items: start;
  justify-content:center;
  flex-direction:column;
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight:bold;

  @media(max-width: 768px){
    font-size: 18px;
    margin-top: 8px;
  }

`

export const Name = styled.h3`
  font-size: 20px;
  margin-top: 8px;

  @media(max-width: 768px){
    font-size: 16px;
  }
`

export const Contact = styled.h3`
margin-top: 4px;
  font-size: 16px;
`

export const Bar = styled.div`
background-color: black;
height: 1px;
width: 100%;
margin: 4px 0 4px 0;
`