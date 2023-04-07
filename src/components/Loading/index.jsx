import styled from "styled-components";
import logo from "../../assets/icons/logo_circulo.png";

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
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
  height: 400px;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={logo} alt="logo ecoturismo" />
    </LoadingContainer>
  );
};
