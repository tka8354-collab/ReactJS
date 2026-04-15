import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Classcomp1 from './classcomp/Classcomp1'
import Classcomp2 from './classcomp/Classcomp2'
import Classcomp3 from './classcomp/Classcomp3'
import ClassComp4 from './classcomp/ClassComp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Class Comp session</h1>
      {/* <Classcomp1></Classcomp1>
      <Classcomp2/> */}
      {/* <Classcomp3/> */}
      <ClassComp4/>
    </>
  )
}

export default App
