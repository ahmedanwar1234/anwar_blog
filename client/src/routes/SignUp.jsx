import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='  min-h-screen mt-20  '>
      <div className=' gap-5 flex flex-col md:flex-row p-3 max-w-3xl mx-auto'>

{/* lef  */}
      <div className='flex-1 '>
        <div>
        <Link className='   font-bold  text-4xl  dark:text-white' to={'/'} ><span className='px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's </span>Blog</Link>
        <p className='text-sm mt-5'>
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
      </div>


      {/* right */}
      <div className=' flex-1'>
        <form className=' flex flex-col gap-4' >
<div>
<Label value='Your username'/>
<TextInput type="text" placeholder='Username' id='username' />
</div>
<div>
<Label value='Your email'/>
<TextInput type="email" placeholder='name@company.com' id='email' />
</div>
<div>
<Label value='Your password'/>
<TextInput type="password" placeholder='Password' id='password' />
</div>
<Button gradientDuoTone={'purpleToPink'} type='submit'>Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
<span>Have and account?</span>
<Link to={'/sign-in'} className='  text-blue-500'>Sign In</Link>
        </div>

      </div>
      </div>
      </div>
  )
}

export default SignUp
