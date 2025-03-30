import {React, useState} from 'react'
import axios from 'axios'

const DisplayCharts = () => {
    const [file, setFile] = useState()
   
    const fetchFile = async() => { 

        try{ 
        const fileResponse = await axios.get('http://localhost:5000/api/uploads')
        setFile(fileResponse.data)
        
        } catch { 
          console.log("Failed to fetch response")
        }
      
        console.log(file)
      }

  return (
    <div>
        <button onClick={fetchFile}> </button>
    </div>
  )
}

export default DisplayCharts