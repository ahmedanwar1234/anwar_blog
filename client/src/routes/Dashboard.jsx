import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import DashSidePar from '../components/DashSidePar';
import DashProfile from '../components/DashProfile';
import DashboardPosts from '../components/DashboardPosts';
import DashUsers from '../components/DashUsers';
const Dashboard = () => {
  const location=useLocation();
  const[tab,setTab]=useState('');
  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    const tabFromUrl=urlParams.get('tab')
    if(tabFromUrl){

      setTab(tabFromUrl)
    }
  },[location.search,setTab])

  return (
    <div className=' min-h-screen flex flex-col md:flex-row'>
      <div className=' md:w-56'>
{/* {Side bar} */}
<DashSidePar/>

      </div>
{
tab==='profile'
&&<div className=' w-full'>
  <DashProfile/>
  </div>}
{/* profile */}

{
  tab==='posts'&&
  <DashboardPosts/>
}

{
  tab==='users'&&
<DashUsers/>
}

    </div>
  )
}

export default Dashboard