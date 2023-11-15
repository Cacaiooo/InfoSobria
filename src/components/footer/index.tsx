"use client";

import { FooterContainer, Logo, TextContainer } from './styles';


export default function Footer() {

  return (
    <FooterContainer>
      <div></div>
      <TextContainer>
        <h1>Não encontrou a mistura que procura ou quer sugerir uma nova? Clica aqui e manda pra gente</h1>
        <p>TODOS OS DIREITOS RESERVADOS © 2023</p>
      </TextContainer>

      <a target="_blank"
      href='https://instagram.com/infosobria?igshid=MTk0NTkyODZkYg=='>
      
      <Logo
      src='assets/instagram.png'
      >

      </Logo>
      </a>
    </FooterContainer>
  )
}