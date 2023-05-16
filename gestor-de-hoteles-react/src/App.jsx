import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet/>

      
    </>
  )
}

export default App
