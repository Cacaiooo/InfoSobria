'use client';


import { MUISearchComponentContainer } from "./styles";

import React, { useState } from "react";
import { Autocomplete,TextField } from '@mui/material';
import { useRouter } from "next/navigation";

export function MUISearchComponent({ className }: { className: string })  {

  const router = useRouter();
  const [textoDaPesquisa, settextoDaPesquisa] = useState('');


  const normalizeString = (str: string) => {
    return str.toLocaleLowerCase('en-US').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const getUrlByTitle = (title: string) => {
    title = normalizeString(title);
    return title;
  }

  const handleInputChange = (event: React.ChangeEvent<{}>, value: string | null) => {
    settextoDaPesquisa(value || '');

    if (value === null) {
      return;
    }

    router.push(`/medicamento/${getUrlByTitle(value)}`);
  };

  const handleWriteInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    settextoDaPesquisa(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      // Call your function when Enter key is pressed
      handleEnterPress();
    }
  };

  const handleEnterPress = () => {
    // Your function logic here
    console.log('Enter key pressed. Do something...');
    router.push(`/medicamento/${getUrlByTitle(textoDaPesquisa)}`);
  };

  return (
    <MUISearchComponentContainer>
    <Autocomplete
      options={["Dipirona", "Paracetamol", "Antialérgico", "Dramin", "Dorflex"]}
      getOptionLabel={(option) => option}
      sx={{ width: 300 }}
      onChange={handleInputChange}
      
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pesquisa"
          className={className}
          onKeyDown={handleKeyDown}
          onChange={handleWriteInput}
          
        />
      )}
    />
    </MUISearchComponentContainer>
  );
};