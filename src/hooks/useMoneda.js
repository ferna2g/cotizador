import React, { Fragment, useState } from 'react'

const useMoneda = () => {

  //state para nuestro custom hook
  const [state, actualizarState] = useState('')

  const Seleccionar = () => (
    <Fragment>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </Fragment>
  )

  //Retornar state, interfaz y funcion que modifica el state
  return [state, Seleccionar, actualizarState]
}

export default useMoneda
