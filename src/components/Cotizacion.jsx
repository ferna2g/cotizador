import React from 'react'

const Cotizacion = ({resultado}) => {
  if(Object.keys(resultado).length === 0 ) return null
  return(
    <div>
        <p>El precio es: <span>{resultado.PRICE}</span></p>
        <p>El precio es: <span>{resultado.HIGHDAY}</span></p>
        <p>El precio es: <span>{resultado.LOWDAY}</span></p>
        <p>El precio es: <span>{resultado.CHANGEPCT24HOUR}</span></p>
        <p>El precio es: <span>{resultado.LASTUPDATE}</span></p>
    </div>

  )
}

export default Cotizacion
