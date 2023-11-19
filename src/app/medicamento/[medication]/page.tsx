"use client";

import { useEffect, useState } from "react";
import { IRemedio, remedios } from "../../../../public/data";
import { Center, Quadrado1, Text, Description } from "./styles";
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";


export default function Medication({ params }: { params: { medication: string } }) {

  const router = useRouter(); 

  function getDescriptionByRoute(route: string) {
    const remedio = remedios.find((remedio) => remedio.route === route);
    return remedio ? remedio : {route:"notfound", title: "Não encontrado", description:[ "Não encontrado"] };
  }

  const [medication, setMedication] = useState<IRemedio>({route:"notfound", title: "Carregando...", description:[ "Carregando..." ]})


  useEffect(() => {

    setMedication(getDescriptionByRoute(params.medication))


  }, [])

  return (

    <Center>
    <Quadrado1>
      <Text>
        <h1>{medication.title}</h1>
        <Description>
        {
          medication.description.map((description, index) => 
          <p key={index}>{description}</p>
          
          
          )
        }
        </Description>
        <Button  variant="contained"
          onClick={
            () => router.back()
          }
          >
          Voltar 
        </Button>
      </Text>
    </Quadrado1>
    </Center>
  )

}