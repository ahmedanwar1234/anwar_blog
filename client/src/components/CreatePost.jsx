import { Button, FileInput, Select, TextInput } from "flowbite-react"
import { useForm } from "react-hook-form"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CreatePost = () => {
    const {register,handleSubmit}=useForm()




    const handleSubmitFunction=(data)=>{
        console.log(data);

    }
  return (
    <div className=" p-3 max-w-3xl mx-auto min-h-screen">
<h1 className=" text-center text-3xl my-7 font-semibold">Craete a post</h1>

<form onSubmit={handleSubmit(handleSubmitFunction)} className=" flex flex-col gap-4">
<div className=" flex flex-col gap-4 md:flex-row justify-between">
<TextInput className="flex-1" {...register('title')} type="text" placeholder="Title" required id="title"/>
<Select>
    <option value={"uncategorixed"}>Select a category</option>
    <option value={"javascript"}>Javascript</option>
    <option value={"reactjs"}>React.js</option>
    <option value={"nextjs"}>Next.js</option>
</Select>
</div>
<div className=" flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3 ">

<FileInput type="file" accept="image/*"/>
<Button  type="button" gradientDuoTone={"purpleToBlue"} size={"sm"} outline>Upload image</Button>
</div>
<ReactQuill  theme="snow" placeholder="Write somthing..." className=" h-72 mb-12"/>
<Button type="submit" gradientDuoTone={'purpleToPink'}>Publish</Button>
</form>
    </div>
  )
}

export default CreatePost