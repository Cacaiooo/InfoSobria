"use client";

import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from "react";
export default function CalcForm({setDosagem}: {setDosagem: (dosagem: {
  doseUnicaMin: number;
  doseUnicaMax: number;
  doseMaximaDiaria: number;
}) => void }) {

  const calcularDosagem = ( peso: number, medicamento: 'Dipirona') => {
    let doseUnicaMin = 0;
    let doseUnicaMax = 0;
    let doseMaximaDiaria = 0;
    console.log(medicamento);      

    if (medicamento === 'Dipirona') {
      if(  peso > 5  &&  peso < 9 ) {
        doseUnicaMin =2;
        doseUnicaMax = 5;
        doseMaximaDiaria = 20;
      }

      if(  peso > 9  &&  peso < 16 ) {
        doseUnicaMin = 3;
        doseUnicaMax = 10;
        doseMaximaDiaria = 40;
      }

      if(  peso > 16  &&  peso < 24 ) {
        doseUnicaMin = 5;
        doseUnicaMax = 15;
        doseMaximaDiaria = 60;
      }

      if(  peso > 24  &&  peso < 31 ) {
        doseUnicaMin = 8;
        doseUnicaMax = 20;
        doseMaximaDiaria = 80;
      }

      if(  peso > 31  &&  peso < 46 ) {
        doseUnicaMin = 10;
        doseUnicaMax = 30;
        doseMaximaDiaria = 120;
      }

      if(  peso > 46  &&  peso < 53 ) {
        doseUnicaMin = 15;
        doseUnicaMax = 35;
        doseMaximaDiaria = 140;
      }

      if(  peso > 54  &&  peso < 60 ) {
        doseUnicaMin = 20;
        doseUnicaMax = 40;
        doseMaximaDiaria = 160;
      }

      if(  peso > 61  &&  peso < 80 ) {
        doseUnicaMin = 25;
        doseUnicaMax = 42;
        doseMaximaDiaria = 180;
      }





    }

    return {
      doseUnicaMin,
      doseUnicaMax,
      doseMaximaDiaria,
    };
 
  }

    
  const [peso, setPeso] = useState<number|undefined>(undefined);

  const handlePesoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setPeso(newValue);

  };



  const [medicamento, setMedicamento] = useState<'Dipirona'>('Dipirona');


  const handleChange = (event: SelectChangeEvent) => {
    setMedicamento(event.target.value as "Dipirona");

  };


  return (
    <div style={{alignItems: 'center', display: "flex", flexDirection: "column", gap: 10}}>


  
          <TextField id="filled-basic" label="Peso" variant="filled"  style={
            {backgroundColor: 'white',
            borderRadius: '14px',
            width: '73%',}
          } type="number"
          onChange={handlePesoChange}
          value={peso}/>



          <FormControl variant="filled"  style={{
          backgroundColor: 'white',
          borderRadius: '14px',
          width: '73%',
          textAlign: 'left',
        }
        }  >
          <InputLabel id="demo-simple-select-label">Medicamento</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Medicamento"
            value={medicamento}
            onChange={handleChange}
          >
            <MenuItem value={1}>Dipirona</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => {
          const dosagem = calcularDosagem( peso || 0, "Dipirona");
          setDosagem(dosagem);
        }}>
          Calcular
        </Button>
    
    </div>
  )
}