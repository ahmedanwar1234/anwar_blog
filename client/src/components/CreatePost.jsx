import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react"
import { useState } from "react";
import { useForm } from "react-hook-form"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { useNavigate } from "react-router";
const CreatePost = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError,setPublishError]=useState(null)
  const [imageFileUploading, setImageFileUploading] = useState(false);  

  const navigate=useNavigate()
  const handleUploadImage = async () => {
 try {
  

  if(!imageFile){
    setImageFileUploadError('Please  an image')
    return;
  }
  setImageFileUploadError(null)
  const storage = getStorage(app);
  const fileName = new Date().getTime() + imageFile.name;
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, imageFile);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      setImageFileUploadProgress(progress.toFixed(0));
    },
    () => {
      setImageFileUploadError(
        'Could not upload image '
      );
      setImageFileUploadProgress(null);
      setImageFile(null);

    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImageFileUploadProgress(null)
        setImageFileUploadError(null)
        setFormData({ ...formData, image: downloadURL });
      });
    }
  );
 } catch (error) {
  setImageFileUploadError('Image upload failed ')
  setImageFileUploadProgress(null)
  console.log(error)
 }
  };


    const {register,handleSubmit}=useForm()

    const handleSubmitFunction=async(data)=>{

      const response=await fetch('/api/post',{
        method:'POST',
       headers:{ 'Content-Type': 'application/json'},
       body: JSON.stringify({image:formData.image,title:data.title,content:formData.content}),
      })

      const datajson= await response.json()
if(!response.ok){
  setPublishError(datajson.message);
  return
}
if(response.ok){
  setPublishError(null)
  navigate(`/post/${data.slug}`)
}
    }


    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageFile(file);
      }
    };
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

<FileInput
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          
        />

        <Button disabled={imageFileUploadProgress} onClick={handleUploadImage}  type="button" gradientDuoTone={"purpleToBlue"} size={"sm"} outline>
        {
  imageFileUploadProgress ?<div className=" w-16 h-16">
    <CircularProgressbar value={imageFileUploadProgress} text={`${imageFileUploadProgress ||0}%`}/>

  </div>
  :(
    'Upload image'
  )
}
        </Button>
</div>
{imageFileUploadError&&
<Alert className="" color={'failure'}>{imageFileUploadError}</Alert>
}
{formData.image &&
<img
src={formData.image}
alt="upload"
className=" w-full h-72 object-contain"
/>
}

<ReactQuill onChange={(value)=>{setFormData({...formData,content:value})}}  required theme="snow" placeholder="Write somthing..." className=" h-72 mb-12"/>
<Button type="submit" gradientDuoTone={'purpleToPink'}>Publish</Button>
{
  publishError && <Alert color={"failure"}>{publishError}</Alert>
}
</form>
    </div>
  )
}

export default CreatePost