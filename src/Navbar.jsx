import React,{useState,useEffect} from 'react'

function Navbar() {
  const [theme,setTheme]=useState("Light")
    useEffect(()=>
    {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme)
    },[theme])
  return (
    <div className='navbar'>
        <div className='nav-left'>
        <h1>To-do-list</h1>
        </div>
        <div className='nav-right'>
        <span onClick={()=>setTheme("light")} className='circle white'></span>
        <span onClick={()=>setTheme("black")} className='circle dark'></span>
        <span onClick={()=>setTheme("pink")} className='circle pink'></span>
        <span  onClick={()=>setTheme("blue")}className='circle blue'></span>


        </div>
    </div>
  )
}

export default Navbar