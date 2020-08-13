import React from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    colum-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

function App() {
  return (
    <Contenedor>
      <div>
          <Imagen
            src={imagen}
            alt="imagen alt"
          />
      </div>
      <div>

      </div>
    </Contenedor>
  );
}

export default App;
