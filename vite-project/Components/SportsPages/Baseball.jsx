import { useState } from 'react'
import axios from 'axios'

function Baseball() {

const [response, setResponse] = useState(null)

const fetchResponse = async() => { 

  try{ 
  const geminiResponse = await axios.get('http://localhost:5000/api/geminiResponse')
  setResponse(geminiResponse.data)
  
  } catch { 
    console.log("Failed to fetch response")
  }
  console.log(response)
}

  return (
    <>
      <div>
      
      <button onClick={fetchResponse}>Search</button>
      
      </div>
  
    </>
  )
}

export default Baseball
