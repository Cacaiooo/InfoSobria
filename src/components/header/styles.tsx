import styled from "styled-components";


export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin-bottom: 1rem;
  padding: 8px 16px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #0D0154;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;


`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 800px) {

    .outSearchBar {
      display: none;
    }
  }

`


export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link {
    color: #0D0154;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    margin: 0 1rem;
    transition: 0.2s;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.);

    &:hover {
      color: #130277;
      text-decoration: underline;
    }
  }

  @media (max-width: 800px) {
    .searchBar {
      display: none;
      
    }
  }
  

`

export const Logo = styled.img`
  height: 100px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #0D0154;
  border-radius: 20px;
  width: 410px;
  padding: 16px;
  margin-right: 20px;

  @media (max-width: 800px) {
    width: 60vw;
  }
`

export const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #0D0154;
  background-color: transparent;

  &::placeholder {
    color: #0D0154;
    font-weight: 600;
  }
`

export const SearchButton = styled.img`

  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
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