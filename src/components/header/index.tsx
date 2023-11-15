'use client';

import Link from "next/link";
import { Container, LinkContainer, Logo, SearchBar, SearchBarContainer, SearchButton, StyledHeader } from "./styles";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {

  const router = useRouter();
  const [textoDaPesquisa, settextoDaPesquisa] = useState('');


  const handleInputChange = (e:any) => {
    settextoDaPesquisa(e.target.value);
  };
  
  
  const SearchComponent = ({className } : { className: string}) => {
    return (
      <SearchBarContainer className={className} >


        <SearchBar placeholder="Pesquisar remédio" type="text" onChange={handleInputChange}  />


        <SearchButton src="assets/search.png" alt="search" />


      </SearchBarContainer>
    )
  }
  
  // console.log(textoDaPesquisa);
  // router.push(`/medicamento/${textoDaPesquisa}`)




  return (
    <Container>
    <StyledHeader>
        <Link href="/">
          <Logo
            src="assets/logoinfosobria.png"
            alt="Logo"
          />
        </Link>
      <LinkContainer>
        <Link className="link" href="/about">Sobre o projeto</Link>

        <SearchComponent className="searchBar" />

      </LinkContainer>

    </StyledHeader>

    
    <SearchComponent className="outSearchBar" />

    </Container>
  )
}