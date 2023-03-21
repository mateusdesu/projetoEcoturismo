import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 10px 4px;
`;

export const Button = styled.button`
  color: #4a4da3;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
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
    font-size: 0.75rem;
    width: 90px;
  }
`;
