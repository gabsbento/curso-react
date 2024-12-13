import React from 'react'

const ManageData = () => {
    const [number, setNumber] = React.useState(0);
  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number+1)}>Alterar</button>
    </div>
  )
}

export default ManageData