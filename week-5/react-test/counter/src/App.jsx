import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count:0
};

function App() {

  function ochandler(){
    state.count=state.count+1;
    console.log(state.count);
  }
  return (
    <div>
      <button onClick={ochandler}>Count {state.count}</button>
    </div>
  )
}

export default App
