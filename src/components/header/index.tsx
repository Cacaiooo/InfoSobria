'use client';

import Link from "next/link";
import { Container, LinkContainer, Logo, StyledHeader } from "./styles";

import React from "react";
import { MUISearchComponent } from "../muiSearchComponent";


export default function Header() {

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
        

        {
          window.innerWidth >= 800 ?
          <MUISearchComponent className="searchBar" />
          :
          <></>
        }

      </LinkContainer>

    </StyledHeader>

    {
      window.innerWidth < 800 ?
     <MUISearchComponent className="outSearchBar" />
      :
      <></>
    }

    </Container>
  )
}