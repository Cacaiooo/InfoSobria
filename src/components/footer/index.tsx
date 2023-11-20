"use client";

import { FooterContainer, Logo, TextContainer, Gray } from './styles';


export default function Footer() {

  return (
    <FooterContainer>
      <div></div>
      <TextContainer>
        <Gray>
        <h1> <a  target="blank" className="hover-gray"  href="https://docs.google.com/forms/d/e/1FAIpQLScmklBsRzRR_Yi0wiTZEpn6B2AY8OsJK2b6hiZpSsqyLfzA-A/viewform">Não encontrou a mistura que procura ou quer sugerir uma nova? Clica aqui e manda pra gente</a></h1>
        <p>TODOS OS DIREITOS RESERVADOS © 2023</p>
        </Gray>
        
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