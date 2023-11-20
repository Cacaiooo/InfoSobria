"use client";

import { useState } from "react";
import { Quadrado, Meio, Texto, SelectContainer, DivInput } from "./styles";
import CalcForm from "@/components/calcForm";
import MixForm from "@/components/mixForm";


export default function Home() {
  const [resultado, setResultado] = useState<{
    doseUnicaMin: number;
    doseUnicaMax: number;
    doseMaximaDiaria: number;
  } | undefined >(undefined);


  return (
    <main>
      
      <Meio>
      <Quadrado>
        <Texto>
          <h1>Interações medicamentosas</h1>
          <p className="calctxt">Na hora de tomar um remédio, o app vai ajudar você a não cometer erros prejudiciais para a sua saúde!</p>
          <p className="calchelp">Escolha um medicamento que deseja tomar:</p>

          <MixForm />

      
        </Texto>     
      </Quadrado>
      <Quadrado>
        <Texto>
        <h1>Calculadora de dosagens</h1>
        <p className="calctxt">Tenha informações confiáveis sobre medicamentos</p>
        <p className="calchelp">Digite o seu peso e o medicamento desejado!</p>

        <DivInput>


        <CalcForm setDosagem={setResultado}/>
        

        </DivInput>

        


          {resultado && (<>
          <p className="calchelp">A dose recomendada é:</p>
            <div>
              <p className="calctxt">Dose única: {resultado.doseUnicaMin} - {resultado.doseUnicaMax} gotas</p>
              <p className="calctxt">Dose máxima diária: {resultado.doseMaximaDiaria} gotas</p>
              <p> (4 tomadas x {resultado.doseMaximaDiaria / 4} gotas ) </p>
              <p style={{color:"red", marginTop: 10, textAlign: "justify"}}>Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista.</p>
            </div>

            </>
          )}
        
        </Texto>
 
      </Quadrado>
      </Meio>
    </main>
  )
}
