import { useState } from 'react'
import bananaImage from '/assets/bananas.png'

const App = () => {

  return (
    <div>
      <h1 id="header1">Banana</h1>
      <img src={bananaImage} alt="banana" width="300" id="bananaimg"/>
    </div>
  )
}

export default App