import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
mongoose.connect(process.env.DATABASEURI)
.then(()=>{
    console.log("C onnected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})

const app = express()
app.listen(3000,()=>{
    console.log('Server is listening on port 3000 !')
})