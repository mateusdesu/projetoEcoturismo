import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: base-line;
  justify-content: space-between;
  flex-direction: row;
  background-color: #E7E7E7D1;
  height: 50px;
  margin: 0 4px 0 4px;
  border-radius: 8px;
  padding: 8px;
`;
export const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin:auto;
`;

export const MapImage = styled.img`
  height: 280px;
  width: auto;
  @media (max-width: 768px) {
    width: 100%;
    
  }
`;

export const Container = styled.div`
  display:flex
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:4px;
  background-color: #A6BBDE99;
  width:100%;
  height:100vh;
`;

export const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E7E7E7D1;
  border-radius: 16px;
  padding: 8px;
  margin: 0 4px;
  height: 47%;
`;

export const Bar = styled.div`
  background-color: #1E1E1E99;
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
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 4px 0 0 0;
  justify-content: center;
  align-items: base-line;
`;

export const ListText = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-left: 8px;
`;

export const ListBar = styled.div`
  background-color: gray;
  height: 1px;
  width: 100%;
`;
