import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0;
  overflow-x:auto;
  height: 60px;
  ::-webkit-scrollbar-thumb{
    background-color: #4a4da3;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 4px;
    margin: 0 4px;
    
  }
`;