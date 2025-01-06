import React from 'react'

function CarDetails({brand, km, color, status}) {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            <li>Status: {status === true ? "novo" : "usado"} </li>
        </ul>
    </div>
  )
}

export default CarDetails