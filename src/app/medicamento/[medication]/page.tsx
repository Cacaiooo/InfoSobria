"use client";

import { useEffect, useState } from "react";
import { IRemedio, remedios } from "../../../../public/data";



export default function Medication({ params }: { params: { medication: string } }) {


  function getDescriptionByTitle(title: string) {
    const remedio = remedios.find((remedio) => remedio.title === title);
    return remedio ? remedio : { title: "Não encontrado", description: "Não encontrado" };
  }

  const [medication, setMedication] = useState<IRemedio>({ title: "Carregando...", description: "Carregando..." })


  useEffect(() => {

    setMedication(getDescriptionByTitle(params.medication))


  }, [])

  return (
    <div>
      <h1>{medication.title}</h1>
      <p>{medication.description}</p>
    </div>
  )

}