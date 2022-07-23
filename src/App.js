import React from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import Task from './components/Task';
// import Button from "./components/Button"
const App = () => {
  return (
    <div>
    <Header/>
    <Task/>
    {/* <Button/> */}
    </div>
  )
}

export default App
