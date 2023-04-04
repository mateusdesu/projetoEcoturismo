import styled, { keyframes } from "styled-components";
import logo from "../../assets/icons/logo2.png";

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4a4da3;
  position: fixed;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const LoadingImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #f4f4f4;
  border-radius: 100%;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={logo} alt="logo ecoturismo" />
    </LoadingContainer>
  );
};
