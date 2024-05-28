import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: base-line;
  justify-content: space-between;
  flex-direction: row;
  background-color: #e7e7e7d1;
  height: 4rem;
  width: 100%;
  margin: 0 4px 0 4px;
  border-radius: 8px;
  padding: 8px;
`;
export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: auto;
  margin-top: 8px;
`;

export const MapImage = styled.img`
  height: 240px;
  width: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  background-color: #a6bbde99;
  width: 100%;
  height: 100vh;
`;

export const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #e7e7e7d1;
  border-radius: 16px;
  padding: 8px 4px;
  height: 50rem;
`;

export const Bar = styled.div`
  background-color: #1e1e1e99;
  width: 150px;
  height: 12px;
  border-radius: 50px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  margin-top: 8px;

  @media (min-width: 768px) {
    width: 800px;
    letter-spacing: 1px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 0 0 0;
  justify-content: center;
  align-items: baseline;
`;

export const ListText = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    letter-spacing: 1px;
    font-size: 12px;
  }
`;

export const ListBar = styled.div`
  background-color: gray;
  height: 1px;
  width: 100%;
`;
