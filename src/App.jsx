import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabla from './components/Tabla'
import Formulario from './components/Formulario'
import Modal from './components/Modal'
function App() {
  

  return (
    <div>
    <Tabla/>
    <Formulario/>
    <Modal/>
    </div>
  )
}

export default App
