import mongoose from 'mongoose'


const postSchema=new mongoose.Schema({
    title:{
        type:String,
required:true,
unique:true,

    },
    content:{
type:String,
required:true
    },
    image:{
        type:String,
        default:"https://www.theedublogger.com/files/2019/03/10-Minute-Weekly-Blogging-Plan-tasqn3-prizg4-1080x720.jpeg"
    },
userId:{
    type:String,

},
category:{
    type:String,
    default:'uncategorized'
},
slug:{
    type:String,
    required:true,
    unique:true
}
},{timestamps:true}
)

const Post=mongoose.model('Post',postSchema)
export default Post;