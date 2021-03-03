import React from 'react'
  
function Test2 ({ click }) {
    return (
      <>
        <button onClick={() => click(2)}> Click on Div2</button>
      </>
    )
}

export default Test2;