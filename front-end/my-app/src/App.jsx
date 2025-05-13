import { useState } from 'react'
import Header from './components/Header'
import Item from './components/Item'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Login/>
    </>
  )
}

export default App
