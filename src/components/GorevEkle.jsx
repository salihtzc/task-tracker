import { useState } from 'react'

const GorevEkle = ({gorevler,setGorevler}) => {
 console [text,setText] = useState("")
 console [day,setDay] = useState("")
 
  return (
    <div>
    <header className='header'>
    <h1>TASK TRACKER</h1>
    <button className='btn' style={{backgroundColor:"red"}}  >CLOSE ADD TASK BAR</button>
    </header>

    <form>
     <div className='form-control'> 
     <label htmlFor="text"></label> 
     <input 
     id='text' 
     type="text" 
     name='text' 
     value={gorevler.text} 
     placeholder="Add Task"
     onChange={(e)=>{setText(e.target.value)}}
     />
     </div>

     <div className='form-control'> 
     <label htmlFor="text">Day & Time</label> 
     <input 
     id='day' 
     type="date" 
     name='day' 
     value={gorevler.day} 
     placeholder="Add Task"
     onChange={(e)=>{setDay(e.target.value)}}
     />
     </div>


    </form>
    </div>
  )
}

export default GorevEkle
