import { Badge, Button, TextInput } from "flowbite-react"
import { useSelector } from "react-redux"
import {useForm}from 'react-hook-form'


const DashProfile = () => {
    const {currentUser}=useSelector(state=>state.user);

const{register,handleSubmit,formState:{errors}}=useForm()

const submitHandler=(data)=>{
    console.log(data)
}


  return (
    <div className=" flex flex-col items-center p-5 w-full">
<h1 className=" font-semibold my-7 text-3xl">profile</h1>
<form   onSubmit={handleSubmit(submitHandler)} className=" flex flex-col cursor-pointer shadow-md w-full md:w-[50%] gap-y-5">
    <div className=" mx-auto w-32 h-32 overflow-hidden rounded-full">

<img className=" w-full h-full border-8 object-cover border-[lightgray] rounded-full" src={currentUser.profilePicture} alt="user" />
    </div>

    <TextInput {...register('username',{required:true})} defaultValue={currentUser.username} id="username" type="text" placeholder="User" className=" "/>
    {errors?.username?.type==='required'&&
     <Badge className="w-fit" color={"failure"} role="alert">
     username is required
   </Badge>
    }
    <TextInput type="email" placeholder="Email" {...register('email',{required:true})} defaultValue={currentUser.email} />
  
    <TextInput {...register('password')}placeholder="Password"type="password"  />

<Button gradientDuoTone={'purpleToBlue'} outline type="submit">
    Update
</Button>
</form>

<div className=" md:w-[50%] text-red-500 flex justify-between mt-5 w-full">
    <span className=" cursor-pointer">Delete Account</span>
    <span className=" cursor-pointer">Sign Out</span>
</div>

    </div>
  )
}

export default DashProfile