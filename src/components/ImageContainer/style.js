import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: auto;
  align-items: center;
  width: 80%;
  height: 400px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 2rem;
  flex-direction: column;
  

  @media(max-width:768px){
    width: 80%;
    height: 400px;
    padding: 0.1rem;
  }
`;

export const Image = styled.img`
  width: 360px;
  height: 400px;
  border-radius: 12px;
  
  
  
  &:hover{
    cursor: pointer;
  }

  @media(max-width:768px){
    width: 90%;
    height: 450px;
  }
  
  
`;