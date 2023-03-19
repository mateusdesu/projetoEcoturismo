import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding-top: 10px;

`;

export const Button = styled.button`
    color: #4A4DA3;
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    background-color: #FFFFFF;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;

    &:hover{
        background-color: #4A4DA3;
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 0.78rem;
    }

`
