"use client";

import { useState } from "react";
import { Quadrado, Meio, Texto, SelectContainer, DivInput } from "./styles";

import Select, { GroupBase, StylesConfig } from 'react-select';
import { allMedications } from "../../public/data";

export default function Home() {

  const selectStyle: StylesConfig<unknown, false, GroupBase<unknown>> = {
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: '10px',
            
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            width: '379px',
            height: '30px',
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            textAlign: 'left', // Align the text to the left
            fontSize: '15px',
          }),
        }

        const MedicationSelector = ({ medications, onSelect }) => {
          const options = medications.map((medication) => ({
            label: medication,
            value: medication,
          }));
        
          const handleChange = (selectedOption) => {
            onSelect(selectedOption);
            
          };
        
          return (
            <Select
              options={options}
              isSearchable
              placeholder="Select Medication..."
              onChange={handleChange}
              styles={selectStyle}
            />
          );
        };

        const [firstSelectedMedication, setFirstSelectedMedication] = useState('');
        const [secondSelectedMedication, setSecondSelectedMedication] = useState('');
        const [interactionText, setInteractionText] = useState('');
        const onSelectFirstMedication = (medication) => {
          setFirstSelectedMedication(medication);
      
        };
        const onSelectSecondMedication = (medication) => {
          setSecondSelectedMedication(medication);
        }

  return (
    <main>
      
      <Meio>
      <Quadrado>
        <Texto>
          <h1>Interações medicamentosas</h1>
          <p className="calctxt">Na hora de tomar um remédio, o app vai ajudar você a não cometer erros prejudiciais para a sua saúde!</p>
          <p className="calchelp">Escolha um medicamento que deseja tomar:</p>

          <SelectContainer>
          <MedicationSelector medications={allMedications} onSelect={onSelectFirstMedication}/>

            
            <MedicationSelector medications={allMedications} onSelect={onSelectSecondMedication}/>
          </SelectContainer>

          <button className="checkBtn">Checar</button>
      
        </Texto>     
      </Quadrado>
      <Quadrado>
        <Texto>
        <h1>Calculadora de dosagens</h1>
        <p className="calctxt">Tenha informações confiáveis sobre medicamentos</p>
        <p className="calchelp">Digite sua idade, o seu peso e o medicamento desejado!</p>

        <DivInput>

        <input className="inputDefault" type="number" placeholder="Digite sua idade"/>
        <input className="inputDefault" type="numer" placeholder="Digite o seu peso"/>

        <Select styles={selectStyle}  placeholder="Selecione um medicamento">
        </Select>
        </DivInput>

          <button className="calckBtn">Calcular</button>
        
        </Texto>
 
      </Quadrado>
      </Meio>
    </main>
  )
}
