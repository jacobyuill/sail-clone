import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')

  return (

    <div>
      <form>
        <p>Select your gender:</p>

        <input type="radio" id="male" name="gender" value="male"/>
        <label for="male"/>Male
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female"/>Female


      </form>
      <input 
        type="text"
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
     <br></br> 
    <input 
        type="text"
        value={text2} 
        onChange={(e) => setText2(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  )
}

export default App
