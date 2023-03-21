import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: auto;
  align-items: center;
  width: 80%;
  height: 70vh;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 16px;
  flex-direction: column;
  

  @media(max-width:768px){
    width: 320px;
    height: 450px;
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
    width: 320px;
    height: 450px;
  }
  
  
`;

export const ImageTitle = styled.h2`
    color:black;
    font-size: 1.75rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 22px;
`
