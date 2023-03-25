import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: base-line;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px 4px;
  overflow-x:auto;
  height: 60px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 4px;
    margin-top: 4px;
    
  }
`;