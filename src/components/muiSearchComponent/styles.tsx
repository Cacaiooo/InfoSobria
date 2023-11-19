import styled from "styled-components";


export const MUISearchComponentContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  margin-right: 20px;

  @media (max-width: 800px) {
    width: 60vw;
  }
`