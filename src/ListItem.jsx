import React from 'react'

function ListItem({itemlist,handleDelete, handleCompleted}) {

 
  return (
    <div className='list-container'>
        {itemlist.map((items)=>(
            <div className={`card ${items.completed===true? 'completed' : ''}`} key={items.id}>
        <div className='card-content'><h2>{items.todo}</h2>
            <p>{items.date}</p>
            </div>
            <div className='card-button'>
            <button onClick={()=>handleCompleted(items)}>Completed</button>

            <button onClick={() => handleDelete(items.id)}>Delete</button>
            </div>
        </div>
        ))}
        
    </div>
  )
}

export default ListItem