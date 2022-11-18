import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const ChangeProfile = (props) => {
    const [newUserName, setNewUsername] = useState('')
    const {setUsername} = useContext(AppContext)
  return (
    <div>
      <input 
      onChange={(event)=>{setNewUsername(event.target.value)}}/>
      {console.log(newUserName)}
      <button onClick={()=>{setUsername(newUserName)}}>Change Username</button>
    </div>
  )
}

export default ChangeProfile
