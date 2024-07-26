import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import Add from './componets/Add'
import View from './componets/View'
import { Route, Routes } from 'react-router-dom'



function App() {
  
  const [appName, setcounter] = useState('studentapp');
  // let appname="MY APP"

  return (
    <>
      <h1>WELCOME TO {appName} PROGRAM</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add person={{"sname":"rj","adm":"123","department":"chem","semester":"s4"}}/>}>
        </Route>
      
      </Routes>
    </>
  )
}

export default App
