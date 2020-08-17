import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios'

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s, ease;

  &: hover{
    background-color: #326AC0;
    cursor: pointer;
  }
`

const Formulario = () => {

  const [listacripto, guardarCriptomoneda] = useState([])

  const [error, guardarError] = useState(false)

  const MONEDAS = [
    {codigo:'USD', nombre:'Dolar Estadounidense'},
    {codigo:'MXN', nombre:'Peso Mexicano'},
    {codigo:'EUR', nombre:'Euro'},
    {codigo:'GBP', nombre:'Libra Esterlina'}
  ]

  //utilizar useMoneda
  const [ moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS)

//utilizamos criptomoneda
  const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listacripto )

  //consumimos la api
  useEffect(() => {
    const consultarAPI  = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)

      guardarCriptomoneda(resultado.data.Data)
    }

    consultarAPI()
  }, [])

  //cuando el usuario hace submit
  const cotizarMoneda = e => {
    e.preventDefault()

    //validar que los campos no esten vacios
    if(moneda === '' || listacripto === ''){
      guardarError(true)
      return; //se agrega el return para que no exista error
    }

    //pasar los datos al componente principal
    guardarError(false)
  }

  return(
    <form onSubmit={cotizarMoneda}>

    {error ? 'Hay un error' : null}
    <SelectMonedas />
    <SelectCripto />
      <Boton
        type="submit"
        value="Calcular"
      />
    </form>
  )
}

export default Formulario
