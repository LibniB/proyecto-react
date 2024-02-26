import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tabla from './components/Tabla'
import Formulario from './components/Formulario'
import Modal from './components/Modal'
import Nuevo from './components/Nuevo'

const personas =[
  {nombre:"libni",apellido:"Bernarte"},
  {nombre:"maria",apellido:"peralta"},
  {nombre:"olga",apellido:"betancourth"}
]

function App() {
  
  return (
    <div>
    
    {personas.map((persona => (  
        <div key={persona.id}>
          <h2>{persona.nombre}</h2>
          <h2>{persona.apellido}</h2>
        </div>
      )
        ))
    }
    </div>

  )
}

export default App
