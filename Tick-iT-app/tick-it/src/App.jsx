import './App.css'
import { useState, useEffect, useContext } from 'react'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
