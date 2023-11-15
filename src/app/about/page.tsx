"use client";

import { Container, TeamImage, Text, Title, TopicContainer } from "./styles";

export default function about() {

  return (
    <Container>

      <TopicContainer>
      <Title>A EQUIPE</Title>
      <TeamImage src="assets/equipe.jpg" alt="Equipe" />
      </TopicContainer>

      <TopicContainer>
      <Title>O PROJETO</Title>
      <Text>O projeto Infosóbria surge como resposta a um desafio crítico: o crescente cenário de automedicação em um mundo repleto de informações, mas carente de orientação adequada. A internet, uma fonte generalizada de busca por informações de saúde, frequentemente resulta na disseminação de dados imprecisos, levando ao uso irresponsável de medicamentos. Seu objetivo principal é proporcionar acesso a informações confiáveis e elucidativas sobre medicamentos, capacitando os indivíduos a tomar decisões mais conscientes e responsáveis. Essa iniciativa visa, ainda, reduzir os riscos associados à automedicação, buscando impactar positivamente a saúde pública e encorajar práticas mais seguras e saudáveis.</Text>
      </TopicContainer>
    </Container>

  )
}