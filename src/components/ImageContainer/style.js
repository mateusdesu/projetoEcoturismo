import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: auto;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  flex-direction: column;
  

  @media(max-width:768px){
    width: 100%;
    height: 100%;
    padding: 0.1rem;
  }
`;

export const Image = styled.img`
  width: 22rem;
  height: 26rem;
  border-radius: 12px;
  
  
  
  &:hover{
    cursor: pointer;
  }

  @media(max-width:768px){
    width: 100%;
    height: 30rem;
    border-radius: 4px;
  }
  
  
`;

export const ImageModal = styled.img`
  width: 100%;
  height: 26rem;
  border-radius: 12px;
  
  
  
  &:hover{
    cursor: pointer;
  }

  @media(max-width:768px){
    width: 22rem;
    height: 18rem;
    border-radius: 4px;
  }
  
`