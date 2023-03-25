import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: auto;
  align-items: center;
  width: 80%;
  height: 420px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 16px;
  flex-direction: column;
  

  @media(max-width:768px){
    width: 315px;
    height: 430px;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 420px;
  border-radius: 12px;
  
  
  &:hover{
    cursor: pointer;
  }

  @media(max-width:768px){
    width: 300px;
    height: 450px;
  }
  
  
`;