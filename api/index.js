import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config();
mongoose.connect(process.env.DATABASEURI)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})

const app = express()

app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is listening on port 3000 !')
})

app.use('/api/user',userRoutes)
app.use("/api/auth",authRoutes)
app.use((err,req,res,nesxt)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:"false",
        message,
        statusCode:statusCode
    })
})