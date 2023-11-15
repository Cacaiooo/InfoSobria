import styled from "styled-components";

export const Quadrado = styled.div`

  background-color: #0D0154;
  border-radius: 20px;
  width: 410px;

  padding: 16px;

  @media (max-width: 800px) {
    width: 90vw;
  }

`

export const Meio = styled.div`

  display: flex;
  justify-content: center;
  gap: 80px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

`



export const Texto = styled.div`

  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;

h1 {
  font-size: 20px;
  margin-top: 8px;
  padding: 0;
  text-align: center;
}

p {
  color: white;
}

.mistura {
  color: #DEDBDB;
  margin-bottom: 0;
  text-align: left;
  margin-top: 30px;
  margin-bottom: 10px;
}

.calctxt{
  color: #DEDBDB;
  margin-bottom: 0;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

}

.calchelp{
  text-align: left;
  margin-top: 15px;
  margin-bottom: 10px;
}

button{
  color: #0D0154;
  background-color: #A1FB5A;
  padding: 6px;
  border-radius: 14px;
  border-color: #7D7D7D;
  border-style:none;
  font-size: 25px;
  margin-top: 30px;
}
  
`

export const DivInput = styled.div`
display: flex;
flex-direction: column;
gap: 10px;


.inputDefault{

  height: 40px;
  border-radius: 10px;
  border-style:none;
  font-size: 15px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  padding-right: 20px;
  

}

.inputDefault:focus {
  outline: none;
}

.inputDefault::placeholder {
  padding: 10px; /* Adjust the padding value as needed */
}
  

`
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap	: 10px;
`


