import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import userAuth from './routes/auth.route.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import postRouter from './routes/posts.route.js'
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


//middle wares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/user',userRoutes)
app.use('/api/auth',userAuth)
app.use('/api/post',postRouter)

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

app.use((err,req,res,next)=>{
const statusCode=err.statusCode||500;
const message=err.message

res.status(statusCode).json({success:false,statusCode,message})
})