import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
dotenv.config()

mongoose.connect(`${process.env.MONGODB}`).then(()=>{
    console.log('success connect')
}).catch(err=>{
    console.log(err)
})
const app=express();


app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send('this is fuckin api3')
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

