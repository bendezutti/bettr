import { GoogleGenAI } from "@google/genai";
import express from "express"
import cors from "cors"

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/api/geminiResponse', async (req, res) => {

  const ai = new GoogleGenAI({ apiKey: "AIzaSyDUJQrc9McjOipcgvauvB6F96neMDFUT6E" });
  try {

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Give me baseball betting tips.",
      config: {
        maxOutputTokens: 500,
        temperature: 0.1,
      },
    });

    console.log(response.text);

    res.json({
      chatResponse: response.text
    })

  } catch {
    console.error("Could not fetch a response.");
  }
})





import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.send('Uploaded!')
})

app.get('/api/uploads', (req, res) => {
  res.json({
    
  })
})



app.listen(PORT, console.log(`Server is running on ${PORT}`))

