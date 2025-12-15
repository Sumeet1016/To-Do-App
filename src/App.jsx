import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading'
import InputContainer from './Components/InputContainer'
import TableList from './Components/TableList'

function App() {

  return <div className="Container">
    <Heading></Heading>
    <InputContainer></InputContainer>
    <TableList></TableList>
  </div>
}

export default App
