import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 1rem;
  background-color: #4a4da3;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: row;
  color: black;
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
