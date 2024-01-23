import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import {AiOutlineSearch}from 'react-icons/ai'
import {FaMoon, FaSun}from 'react-icons/fa'
import {useDispatch, useSelector}from 'react-redux'
import {toggleTheme}from '../redux/theme/themeSlice'
const Header = () => {
    const path=useLocation().pathname;
    const {currentUser}=useSelector(state=>state.user);
    const {theme}=useSelector(state=>state.theme)
    const disbatch=useDispatch()
  return (
    <Navbar className=' border-b-2'>
<Link className=' self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' to={'/'} ><span className='px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's </span>Blog</Link>

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
<Link to={'/dash?tab=profile'}>
<Dropdown.Item>Profile</Dropdown.Item>
</Link>
<Dropdown.Divider/>
<Dropdown.Item>Sign Out</Dropdown.Item>
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