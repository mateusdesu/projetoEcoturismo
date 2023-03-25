import styled from "styled-components";

export const ButtonNav = styled.button`
  color: #4a4da3;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  text-align:center;
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
    font-size: 1rem;
    width: 125px;
    justify-content: flex-start;

  }
`;

export const ButtonNavActive = styled.button`
  color: #fff;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  text-align:center;
  background-color: #4a4da3;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  &:visited,&:link {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 125px;
    justify-content: flex-start;

  }
`;
