import styled from "styled-components";



export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0D0154;
  width: 100%;
  height: 100px;
  margin-top: 100px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  h1 {
    font-size: 15px;

  }
  p {
    color: white;
  }

`
export const Logo = styled.img`
  height: 90px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`


export const Gray = styled.div`
  .hover-gray:hover {
  color: #888;
  }
`


