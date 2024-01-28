import { Sidebar } from 'flowbite-react'
import  { useEffect, useState } from 'react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';

const DashSidePar = () => {
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
<Sidebar.ItemGroup>
<Link to={'/dashboard?tab=profile'}>
<Sidebar.Item as="div" active={tab==='profile'} icon={HiUser} label={"User"} labelColor="dark" >
Profile
</Sidebar.Item>
</Link>
<Sidebar.Item active icon={HiArrowSmRight} className="cursor-pointer">
<button className='' onClick={handleSignout}>Sign Out</button>
</Sidebar.Item>





</Sidebar.ItemGroup>
</Sidebar.Items>

    </Sidebar>
  )
}

export default DashSidePar