import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import userAuth from './routes/auth.route.js'
import bodyParser from 'body-parser'

// .env
dotenv.config()


//connect with mongodb
mongoose.connect(`${process.env.MONGODB}`).then(()=>{
    console.log('success connect')
}).catch(err=>{
    console.log(err)
})

// start express
const app=express();

//middle ware
app.use(express.json())

// routes
app.use('/api/user',userRoutes)
app.use('/api/auth',userAuth)
app.get('/',(req,res)=>{
    res.send('this is fuckin apiasdfasdfad3')
})
app.post('/',(req,res)=>{
    res.json({data:req.body})
})




// listen the port
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})

