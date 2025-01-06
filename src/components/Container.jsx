import React from 'react'

function Container({ children }) {
  return (
    <div>
        <h2>Container</h2>
        <h2>{children}</h2>
    </div>
  )
}

export default Container