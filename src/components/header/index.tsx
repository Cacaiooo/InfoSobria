'use client';

import Link from "next/link";
import { Container, LinkContainer, Logo, StyledHeader } from "./styles";

import React from "react";
import { MUISearchComponent } from "../muiSearchComponent";
import { useEffect, useState } from "react";


export default function Header() {

  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <Container>
      <StyledHeader>
        <Link href="/">
          <Logo src="assets/logoinfosobria.png" alt="Logo" />
        </Link>
        <LinkContainer>
          <Link className="link" href="/about">
            Sobre o projeto
          </Link>

          {isClient && windowWidth >= 800 ? <MUISearchComponent className="searchBar" /> : null}
        </LinkContainer>
      </StyledHeader>

      {isClient && windowWidth < 800 ? <MUISearchComponent className="outSearchBar" /> : null}
    </Container>
  );
}