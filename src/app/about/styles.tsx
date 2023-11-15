import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 320px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  
`

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 50px;
  color: #0D0154;
`

export const Text = styled.p`
  font-size: 20px;
  color: #0D0154;
  width: 30vw;
  text-align: justify;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`

export const TeamImage = styled.img`
  width: 30vw;
  border-radius: 10%;
  margin-top:20px;
  margin-bottom: 20px;
  transition: 0.2s;

  @media (max-width: 1000px) {
    width: 80vw;
  }

  &:hover {
    transform: scale(1.1);
  }
`