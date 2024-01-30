import { Sidebar } from 'flowbite-react'
import  { useEffect, useState } from 'react'
import { HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';

const DashSidePar = () => {
  const{currentUser}=useSelector(state=>state.user)
  const location=useLocation();
  const[tab,setTab]=useState('');
  const disbatch=useDispatch()
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl=urlParams.get('tab')
    if(tabFromUrl){
      
      setTab(tabFromUrl)
    }
  },[location.search,setTab])


//   const handlSignOut=()=>{
// disbatch(signoutSuccess())
//   }
  
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
    <Sidebar className=' w-full md:w-56'>
<Sidebar.Items>
<Sidebar.ItemGroup className=' flex flex-col gap-1'>
<Link to={'/dashboard?tab=profile'}>
<Sidebar.Item as="div" active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin?"Admin":"User"} labelColor="dark" >
Profile
</Sidebar.Item>
</Link>
{
  currentUser.isAdmin &&
  <Link to={'/dashboard?tab=posts'}>
  <Sidebar.Item  as="div" active={tab==='posts'} icon={HiDocumentText} className="cursor-pointer">
Posts
  </Sidebar.Item>
</Link>
}
{
  currentUser.isAdmin &&
  <Link to={'/dashboard?tab=users'}>
  <Sidebar.Item  as="div" active={tab==='users'} icon={HiOutlineUserGroup} className="cursor-pointer">
Users
  </Sidebar.Item>
</Link>
}

<Sidebar.Item  icon={HiArrowSmRight} className="cursor-pointer">
<button className='' onClick={handleSignout}>Sign Out</button>
</Sidebar.Item>





</Sidebar.ItemGroup>
</Sidebar.Items>

    </Sidebar>
  )
}

export default DashSidePar