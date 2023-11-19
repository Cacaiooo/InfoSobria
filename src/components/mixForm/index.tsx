'use client';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { PopupText } from './styles';

interface IInteracoes {
  medicamento: string;
  interacoes: {
    medicamento: string;
    descricao: string[];
  }[]
  };




export default function MixForm() {


  
  const interacoes: IInteracoes[] = [
    {
      medicamento: "Colírios",
      interacoes: [
        {
          medicamento: "Descongestionantes nasais",
          descricao: [`Combinar colírios (medicamentos para os olhos) com descongestionantes nasais pode causar preocupações, principalmente devido à absorção desses medicamentos na corrente sanguínea.`,
          `Os descongestionantes nasais contêm substâncias como a oximetazolina ou a fenilefrina, que têm o objetivo de aliviar o inchaço nas passagens nasais, facilitando a respiração. No entanto, esses compostos podem ser absorvidos não apenas pelo nariz, mas também pela mucosa ocular, quando combinados com colírios.`,
          `O problema reside no potencial efeito sistêmico, ou seja, a absorção do descongestionante nasal pode levar a um aumento da pressão sanguínea. Isso pode ser especialmente preocupante em idosos e crianças, que tendem a ser mais sensíveis a alterações na pressão sanguínea.`,
          `O aumento da pressão sanguínea pode gerar efeitos colaterais como palpitações, aumento do ritmo cardíaco, nervosismo, dor de cabeça e, em casos mais graves, complicações cardiovasculares.`,
          `Por essa razão, é recomendado evitar essa combinação, a menos que seja expressamente indicada por um profissional de saúde. Sempre consulte um médico ou farmacêutico antes de usar qualquer combinação de medicamentos, especialmente em populações mais sensíveis, como idosos e crianças.`,
        ] 
        }
      ]
      

    },
    {
      medicamento: "Descongestionantes nasais",
      interacoes: [
        {
          medicamento: "Colírios",
          descricao: [`Combinar colírios (medicamentos para os olhos) com descongestionantes nasais pode causar preocupações, principalmente devido à absorção desses medicamentos na corrente sanguínea.`,
          `Os descongestionantes nasais contêm substâncias como a oximetazolina ou a fenilefrina, que têm o objetivo de aliviar o inchaço nas passagens nasais, facilitando a respiração. No entanto, esses compostos podem ser absorvidos não apenas pelo nariz, mas também pela mucosa ocular, quando combinados com colírios.`,
          `O problema reside no potencial efeito sistêmico, ou seja, a absorção do descongestionante nasal pode levar a um aumento da pressão sanguínea. Isso pode ser especialmente preocupante em idosos e crianças, que tendem a ser mais sensíveis a alterações na pressão sanguínea.`,
          `O aumento da pressão sanguínea pode gerar efeitos colaterais como palpitações, aumento do ritmo cardíaco, nervosismo, dor de cabeça e, em casos mais graves, complicações cardiovasculares.`,
          `Por essa razão, é recomendado evitar essa combinação, a menos que seja expressamente indicada por um profissional de saúde. Sempre consulte um médico ou farmacêutico antes de usar qualquer combinação de medicamentos, especialmente em populações mais sensíveis, como idosos e crianças.`,
        ]
        }
      ]
    },
    {
      medicamento: "Antibioticos",
      interacoes: [
        {
          medicamento: "Anticoncepcionais",
          descricao: [`A interação entre antibióticos e anticoncepcionais é uma preocupação comum, pois pode afetar a eficácia dos anticoncepcionais hormonais, como pílulas anticoncepcionais. Interferindo na eficácia dos mesmos, tornando menos confiáveis na prevenção da gravidez. Isso ocorre porque alguns antibióticos podem afetar o metabolismo dos hormônios contidos nas pílulas.`,
          `Os antibióticos que são mais frequentemente associados a interações com anticoncepcionais incluem rifampicina, griseofulvina e alguns antibióticos usados no tratamento da tuberculose. Estes antibióticos podem acelerar o metabolismo dos hormônios nas pílulas anticoncepcionais, reduzindo sua eficácia. Tornando necessário o uso de métodos contraceptivos adicionais, como preservativos, durante o tratamento com esses antibióticos e por um tempo depois de terminar o tratamento.`,
          `Resumido a interação entre antibióticos e anticoncepcionais pode afetar a eficácia das pílulas anticoncepcionais, tornando-as menos confiáveis na prevenção da gravidez. Isso acontece porque certos antibióticos, como rifampicina e griseofulvina, aceleram o metabolismo dos hormônios nas pílulas, reduzindo sua eficácia. Portanto, durante o tratamento com esses antibióticos e um período após, é aconselhável usar métodos contraceptivos adicionais, como preservativos.`,         
          ]
        },
        {
          medicamento: "Leite",
          descricao: [`Combinar antibióticos com leite pode ter efeitos variados, dependendo do tipo específico de antibiótico. Alguns antibióticos, como a tetraciclina, não devem ser ingeridos com leite ou produtos lácteos, pois o cálcio presente nesses alimentos pode interferir na absorção do antibiótico, reduzindo sua eficácia.`,
          `A ligação entre o cálcio do leite e a tetraciclina impede que o antibiótico seja absorvido de forma eficaz pelo organismo, reduzindo sua capacidade de combater as bactérias, o que pode comprometer o tratamento.`,
          `Por outro lado, outros antibióticos, como a amoxicilina, não são afetados pela presença de leite ou derivados, e podem ser ingeridos juntamente com esses alimentos sem prejudicar a sua eficácia.`,
          `Se você estiver em dúvida sobre a interação entre um antibiótico específico e o consumo de leite, ou se tiver preocupações com sua medicação, é sempre recomendável consultar um médico ou farmacêutico. Eles podem fornecer orientações específicas com base no seu tratamento e condições de saúde.`,
          `Em resumo, a interação entre leite e antibióticos varia de acordo com o tipo de antibiótico. É importante seguir as orientações da bula do medicamento e, se houver dúvidas, buscar orientação de um profissional de saúde para garantir que o tratamento seja eficaz.`,
          ]          
        }
      ]
    },
    {
      medicamento: "Anticoncepcionais",
      interacoes: [
      {
        medicamento: "Antibioticos",
        descricao: [`A interação entre antibióticos e anticoncepcionais é uma preocupação comum, pois pode afetar a eficácia dos anticoncepcionais hormonais, como pílulas anticoncepcionais. Interferindo na eficácia dos mesmos, tornando menos confiáveis na prevenção da gravidez. Isso ocorre porque alguns antibióticos podem afetar o metabolismo dos hormônios contidos nas pílulas.`,
          `Os antibióticos que são mais frequentemente associados a interações com anticoncepcionais incluem rifampicina, griseofulvina e alguns antibióticos usados no tratamento da tuberculose. Estes antibióticos podem acelerar o metabolismo dos hormônios nas pílulas anticoncepcionais, reduzindo sua eficácia. Tornando necessário o uso de métodos contraceptivos adicionais, como preservativos, durante o tratamento com esses antibióticos e por um tempo depois de terminar o tratamento.`,
          `Resumido a interação entre antibióticos e anticoncepcionais pode afetar a eficácia das pílulas anticoncepcionais, tornando-as menos confiáveis na prevenção da gravidez. Isso acontece porque certos antibióticos, como rifampicina e griseofulvina, aceleram o metabolismo dos hormônios nas pílulas, reduzindo sua eficácia. Portanto, durante o tratamento com esses antibióticos e um período após, é aconselhável usar métodos contraceptivos adicionais, como preservativos.`,          
          ]
      }
    ]
    },
    {
      medicamento: "Leite",
      interacoes: [
        {
          medicamento: "Antibioticos",
          descricao: [`Combinar antibióticos com leite pode ter efeitos variados, dependendo do tipo específico de antibiótico. Alguns antibióticos, como a tetraciclina, não devem ser ingeridos com leite ou produtos lácteos, pois o cálcio presente nesses alimentos pode interferir na absorção do antibiótico, reduzindo sua eficácia.`,
          `A ligação entre o cálcio do leite e a tetraciclina impede que o antibiótico seja absorvido de forma eficaz pelo organismo, reduzindo sua capacidade de combater as bactérias, o que pode comprometer o tratamento.`,
          `Por outro lado, outros antibióticos, como a amoxicilina, não são afetados pela presença de leite ou derivados, e podem ser ingeridos juntamente com esses alimentos sem prejudicar a sua eficácia.`,
          `Se você estiver em dúvida sobre a interação entre um antibiótico específico e o consumo de leite, ou se tiver preocupações com sua medicação, é sempre recomendável consultar um médico ou farmacêutico. Eles podem fornecer orientações específicas com base no seu tratamento e condições de saúde.`,
          `Em resumo, a interação entre leite e antibióticos varia de acordo com o tipo de antibiótico. É importante seguir as orientações da bula do medicamento e, se houver dúvidas, buscar orientação de um profissional de saúde para garantir que o tratamento seja eficaz.`,
          ]    
        }
      ]
    },
    {
      medicamento: "Dramin",
      interacoes: [
        {
          medicamento: "Alimentos gordurosos",
          descricao: [`A interação entre o Dramin e alimentos gordurosos é uma consideração importante ao tomar este medicamento. O Dramin, conhecido por sua eficácia no combate a náuseas e enjoos, pode ter sua absorção afetada pela presença de alimentos ricos em gordura.`,
          `Alimentos gordurosos, como chocolates, queijos e embutidos, podem interferir na absorção do Dramin. Isso acontece devido à maneira como o medicamento é processado pelo corpo. Quando consumido com alimentos gordurosos, o tempo e a eficácia da absorção do Dramin podem ser alterados, o que pode afetar a rapidez com que o medicamento começa a agir e sua eficácia geral no combate às náuseas.`,
          `A presença de alimentos gordurosos no estômago pode retardar a absorção do Dramin, atrasando seu início de ação. Isso pode ser especialmente significativo em situações em que a pessoa está buscando alívio imediato de náuseas ou enjoos.`,
          `Portanto, se possível, é aconselhável tomar o Dramin em um estômago vazio, longe de refeições ricas em gordura, para garantir que o medicamento seja absorvido de maneira mais eficaz e rápida, proporcionando o alívio desejado.`,
          `Como sempre, é importante seguir as instruções fornecidas na bula do medicamento e, se houver dúvidas sobre a interação do Dramin com alimentos ou outros medicamentos, é recomendável consultar um profissional de saúde. Assim, é possível garantir a eficácia do tratamento e evitar possíveis complicações decorrentes da interação entre o medicamento e alimentos gordurosos.`,
        ]
        }
      ]
    },

    {
      medicamento: "Alimentos gordurosos",
      interacoes: [
        {
          medicamento: "Dramin",
          descricao: [`A interação entre o Dramin e alimentos gordurosos é uma consideração importante ao tomar este medicamento. O Dramin, conhecido por sua eficácia no combate a náuseas e enjoos, pode ter sua absorção afetada pela presença de alimentos ricos em gordura.`,
          `Alimentos gordurosos, como chocolates, queijos e embutidos, podem interferir na absorção do Dramin. Isso acontece devido à maneira como o medicamento é processado pelo corpo. Quando consumido com alimentos gordurosos, o tempo e a eficácia da absorção do Dramin podem ser alterados, o que pode afetar a rapidez com que o medicamento começa a agir e sua eficácia geral no combate às náuseas.`,
          `A presença de alimentos gordurosos no estômago pode retardar a absorção do Dramin, atrasando seu início de ação. Isso pode ser especialmente significativo em situações em que a pessoa está buscando alívio imediato de náuseas ou enjoos.`,
          `Portanto, se possível, é aconselhável tomar o Dramin em um estômago vazio, longe de refeições ricas em gordura, para garantir que o medicamento seja absorvido de maneira mais eficaz e rápida, proporcionando o alívio desejado.`,
          `Como sempre, é importante seguir as instruções fornecidas na bula do medicamento e, se houver dúvidas sobre a interação do Dramin com alimentos ou outros medicamentos, é recomendável consultar um profissional de saúde. Assim, é possível garantir a eficácia do tratamento e evitar possíveis complicações decorrentes da interação entre o medicamento e alimentos gordurosos.`,
          ]
        }
      ]
    },
    {
      medicamento: "Paracetamol",
      interacoes: [
        {
          medicamento: "Álcool",
          descricao: [`Combinar álcool com paracetamol pode ser perigoso para o fígado. O paracetamol, quando ingerido em doses elevadas, pode sobrecarregar o fígado e levar a danos hepáticos graves.`,
          `O álcool também é metabolizado no fígado. Quando ingerido em conjunto com o paracetamol, aumenta ainda mais o estresse no fígado, potencializando os efeitos negativos em órgão.`,
          `Essa combinação pode aumentar o risco de hepatite medicamentosa, que é uma inflamação do fígado decorrente do uso excessivo de medicamentos, podendo evoluir para danos hepáticos graves, insuficiência hepática aguda e até mesmo ser fatal em casos extremos.`,
          `Portanto, a recomendação é evitar consumir álcool ao tomar medicamentos que contenham paracetamol e seguir as instruções médicas e as informações da bula sobre a dosagem adequada. Se houver dúvidas sobre a interação entre o álcool e qualquer medicamento, é fundamental consultar um médico ou farmacêutico para garantir a segurança do tratamento.`
        ]
        },
        {
          medicamento: "Anti-flamatórios",
          descricao: [`A combinação de anti-inflamatórios e paracetamol pode aumentar o risco de efeitos colaterais gastrointestinais, como úlceras ou sangramento. Além disso, a combinação também pode aumentar o risco de danos ao fígado, pois o paracetamol é metabolizado no fígado. Portanto, é essencial seguir as doses recomendadas e não exceder a dose máxima diária desses medicamentos.`,
          `Se você tiver condições médicas preexistentes, como problemas gastrointestinais, doenças cardíacas, doenças hepáticas, doenças renais ou úlceras, é fundamental informar ao seu médico antes de iniciar qualquer tratamento com esses medicamentos, pois eles podem interagir com essas condições.`,
        ]
        }
      ]
    },
    {
      medicamento: "Álcool",
      interacoes: [
      {
        medicamento: "Paracetamol",
        descricao: [`Combinar álcool com paracetamol pode ser perigoso para o fígado. O paracetamol, quando ingerido em doses elevadas, pode sobrecarregar o fígado e levar a danos hepáticos graves.`,
          `O álcool também é metabolizado no fígado. Quando ingerido em conjunto com o paracetamol, aumenta ainda mais o estresse no fígado, potencializando os efeitos negativos em órgão.`,
          `Essa combinação pode aumentar o risco de hepatite medicamentosa, que é uma inflamação do fígado decorrente do uso excessivo de medicamentos, podendo evoluir para danos hepáticos graves, insuficiência hepática aguda e até mesmo ser fatal em casos extremos.`,
          `Portanto, a recomendação é evitar consumir álcool ao tomar medicamentos que contenham paracetamol e seguir as instruções médicas e as informações da bula sobre a dosagem adequada. Se houver dúvidas sobre a interação entre o álcool e qualquer medicamento, é fundamental consultar um médico ou farmacêutico para garantir a segurança do tratamento.`,
        ]
      }
      ]
    },
    {
      medicamento: "Anti-flamatórios",
      interacoes: [
        {
          medicamento: "Paracetamol",
          descricao: [`A combinação de anti-inflamatórios e paracetamol pode aumentar o risco de efeitos colaterais gastrointestinais, como úlceras ou sangramento. Além disso, a combinação também pode aumentar o risco de danos ao fígado, pois o paracetamol é metabolizado no fígado. Portanto, é essencial seguir as doses recomendadas e não exceder a dose máxima diária desses medicamentos.`,
          `Se você tiver condições médicas preexistentes, como problemas gastrointestinais, doenças cardíacas, doenças hepáticas, doenças renais ou úlceras, é fundamental informar ao seu médico antes de iniciar qualquer tratamento com esses medicamentos, pois eles podem interagir com essas condições.`,
          ] 
      }
      ]
    }
  ]


  const [selectedMedicamento1, setSelectedMedicamento1] = useState<string | undefined>(undefined);
  const [selectedMedicamento2, setSelectedMedicamento2] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [interacaoText, setInteracaoText] = useState<string[] | undefined>(undefined);

  

  const handleChangeOption1 = (event: SelectChangeEvent) => {
    setSelectedMedicamento1(event.target.value as string);
  };


  const handleChangeOption2 = (event: SelectChangeEvent) => {
    setSelectedMedicamento2(event.target.value as string);
  };


  return (
    <div style={{alignItems: 'center', display: "flex", flexDirection: "column", gap: 10}}>

        <FormControl variant="filled"  style={{
          backgroundColor: 'white',
          borderRadius: '14px',
          width: '73%',
          textAlign: 'left',
        }
        }  >
          <InputLabel id="demo-simple-select-label1">Opção 1</InputLabel>
          <Select
            labelId="select1label"
            id="select1"
            label="Medicamento"
            value={selectedMedicamento1}
            onChange={handleChangeOption1}
          >
            {selectedMedicamento1 && selectedMedicamento2
              ? interacoes.map((interacao) => (
                  <MenuItem key={interacao.medicamento} value={interacao.medicamento}>
                    {interacao.medicamento}
                  </MenuItem>
                ))
              : selectedMedicamento2
              ? interacoes.find((interacao) => interacao.medicamento === selectedMedicamento2)?.interacoes.map((interacao) => (
                  <MenuItem key={interacao.medicamento} value={interacao.medicamento}>
                    {interacao.medicamento}
                  </MenuItem>
                ))
              : interacoes.map((interacao) => (
                  <MenuItem key={interacao.medicamento} value={interacao.medicamento}>
                    {interacao.medicamento}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
        <FormControl variant="filled"  style={{
          backgroundColor: 'white',
          borderRadius: '14px',
          width: '73%',
          textAlign: 'left',
        }
        }  >
          <InputLabel id="demo-simple-select-label2">Opção 2</InputLabel>
          <Select
            labelId="select1label2"
            id="select2"
            value={selectedMedicamento2}
            label="Medicamento"
            onChange={handleChangeOption2}
          >
            {selectedMedicamento1
            ? interacoes.find((interacao) => interacao.medicamento === selectedMedicamento1)?.interacoes.map((interacao) => (
                <MenuItem key={interacao.medicamento} value={interacao.medicamento}>
                  {interacao.medicamento}
                </MenuItem>
              ))
            : interacoes.map((interacao) => (
                <MenuItem key={interacao.medicamento} value={interacao.medicamento}>
                  {interacao.medicamento}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => {
          const interacao = interacoes.find((interacao) => interacao.medicamento === selectedMedicamento1)?.interacoes.find((interacao) => interacao.medicamento === selectedMedicamento2);
          if(interacao) {
            setInteracaoText(interacao.descricao);
          }
          else {
            setInteracaoText(["Não há interação entre esses medicamentos"]);
          }
          setOpen(true);

        }}>
          Checar
        </Button>


        <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={() => setOpen(false)}>
          <DialogTitle id="simple-dialog-title">{`Pode misturar ${ selectedMedicamento1} com ${selectedMedicamento2}?`}</DialogTitle>
          <div>
            {
              interacaoText?.map((text, index) => (
                <PopupText key={index}
                >
                  {text}
                </PopupText>
              ))
            }
          </div>

        </Dialog>
    </div>
  )
}