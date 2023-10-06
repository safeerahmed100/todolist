import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import UserInput from './UserInput'
import ListItem from './ListItem'

function App() {
  const [input,setInput]= useState('')
  const [error,setError]=useState('')
  const [itemlist,setItemList]=useState([])

  
function handleInput(e){
    setInput(e.target.value);

}
  function handleButton(e){
    const date= new Date()

        e.preventDefault()

        if(input.trim().length>0){
        setItemList([...itemlist,
        {
          id:date.getMilliseconds(),
        todo:input,
        date:date.toLocaleString(),
        completed:false,
        }
      
      ])
      setError('')
      setInput('')

    }
    else{
      setError('The input field should contain atleast 1 character')

    }
        
    }
    function handleDelete(id) {
      const updatedItemList = itemlist.filter((items) => items.id !== id);
      setItemList(updatedItemList);
    }

    
    function handleCompleted(itemToComplete) {
      const updatedItemList = itemlist.map((item) =>
        items.id === itemToComplete.id 
          ? { ...items, completed: !items.completed }
          : items
      );
      setItemList(updatedItemList);
    }
    

   
  return (
    <div className='App'>

      <Navbar/>
      <UserInput input={input} error={error} handleInput={handleInput} handleButton={handleButton}/>
      <ListItem itemlist={itemlist} handleDelete={handleDelete} handleCompleted={handleCompleted}/>
    </div> 
  )
}

export default App