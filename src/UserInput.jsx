import React from 'react'

function UserInput({handleButton,handleInput,error,input}) {
    
  return (
    <div className='user-input-container'>
        
        <form >
            <input  onChange={handleInput} type='text'value={input} placeholder='Enter things in the list'/>
            <button onClick={handleButton}>Submit</button>
            <div className='error'> <span>{error}</span>
</div>

        </form>
    </div>
  )
}

export default UserInput