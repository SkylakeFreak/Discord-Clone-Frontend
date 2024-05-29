import React from 'react'
import { useState } from 'react'
function Test() {
    const [div,setdiv]=useState([]);

    const addnewdiv=()=>{
    const newdiv={id:div.length,content:`Div ${div.length+1}`}
    setdiv([...div,newdiv]);
    }
   
  return (
    <div>
        <img src="https://discord.com/assets/0048cbfdd0b3ef186d22.png" alt="" />
    </div>
  )
}

export default Test