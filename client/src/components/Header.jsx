import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput, Toast } from 'flowbite-react'
import { Link ,useLocation} from 'react-router-dom'
import {AiOutlineSearch}from 'react-icons/ai'
import {FaMoon, FaSun}from 'react-icons/fa'
import {useDispatch, useSelector}from 'react-redux'
import {toggleTheme}from '../redux/theme/themeSlice'
import { signoutSuccess } from '../redux/user/userSlice'
import { useCallback, useState } from 'react'
import { HiCheck } from 'react-icons/hi'
const Header = () => {
  const [truee,setTruee]=useState(false)
  const [showToast,setShowToast]=useState(false)

    const path=useLocation().pathname;
    const {currentUser}=useSelector(state=>state.user);
    const {theme}=useSelector(state=>state.theme)
    const disbatch=useDispatch()

    const handlSignOut=useCallback(()=>{
      disbatch(signoutSuccess())
      setTruee(false)
        setShowToast(true)
 
        },[disbatch])
        const handleSignout = async () => {
          try {
            const res = await fetch('/api/user/signout', {
              method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) {
              console.log(data.message);
            } else {
              disbatch(signoutSuccess());
            }
          } catch (error) {
            console.log(error.message);
          }
        };
  return (
    <Navbar className=' border-b-2'>
      <div className={`${truee?"fixed top-[50%] left-1/2":"hidden"} translate-x-[-50%] translate-y-[-50%]`}>
<div className=' flex flex-col justify-center items-center gap-5 bg-red-500 p-5 rounded-xl'>
  <h1 className='font-semibold text-lg'>are you sure to sign out</h1>

<div className=' felx gap-8 '>
<button onClick={handlSignOut} className=' font-semibold text-lg mr-10 '>yes</button>
  <button onClick={()=>setTruee(!truee)} className=' font-semibold text-lg'>no</button>
</div>

</div>
      </div>
      {
      showToast&&
      <div className='fixed bottom-10 right-10'>
    
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-600 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Successfully Sign Out</div>
       
      </Toast>
      </div>
      }
<Link className=' self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' to={'/'} ><span className='px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahands </span>Blog</Link>

<form action="">
<TextInput 
type='text' 
placeholder='Search...'  
rightIcon={AiOutlineSearch}
className=' hidden lg:inline'


/>

</form>
<Button className=' w-12 h-10  lg:hidden' color='gray' pill>
    
<AiOutlineSearch/>
</Button>

<div className=' flex  gap-2 md:order-2'>
    <Button onClick={()=>disbatch(toggleTheme())} className=' w-12 h-10 hidden sm:inline' color='gray' pill>
      {
theme==='dark'?( <FaMoon />):(<FaSun/>)
      }
     
      </Button>

{currentUser?(
<Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
<Dropdown.Header>
  <span className=' block text-sm'>@{currentUser.username}</span>
  <span className=' block font-medium text-sm  truncate'>@{currentUser.email}</span>
</Dropdown.Header>
<Link to={'/dashboard?tab=profile'}>
<Dropdown.Item>Profile</Dropdown.Item>
</Link>
<Dropdown.Divider/>
<Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
</Dropdown>
):(
  <Link to={'/sign-in'}>
    <Button  gradientDuoTone={'purpleToBlue'} outline pill>Sign In</Button>

    </Link>
)}
    
    <NavbarToggle>

    </NavbarToggle>
</div>
<Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header