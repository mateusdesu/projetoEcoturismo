import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px 4px;
  overflow-x:auto;
  height: 60px;

  @media (max-width: 768px) {
    justify-content: space-between;
    
  }
`;

export const Button = styled.button`
  color: #4a4da3;
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 1rem;
  font-size: 1/25rem;
  background-color: #ffffff;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  &:visited,&:link {
    text-decoration: none;
  }

  &:hover {
    background-color: #4a4da3;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.725rem;
    width: 120px;
    justify-content: flex-start;
    
  }
`;
