import React from 'react'

import {BsTwitter , BsMoonStarsFill} from "react-icons/bs"
import { BiBell , BiBookmark , BiHomeCircle , BiUser } from "react-icons/bi"
import { RiHashtag , RiFileListLine } from "react-icons/ri"
import { HiOutlineMail , HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { CgSun } from "react-icons/cg"

import SidebarRow from './SidebarRow/SidebarRow'
import {useSession , signOut , signIn} from "next-auth/react"

import { useTheme } from "next-themes"
 

interface Props {
  hydrated:boolean
}



function Sidebar( {hydrated}:Props ) {
  const { systemTheme , theme , setTheme } = useTheme()

  const  renderThemeChanger = () => {

    if(!hydrated) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if(currentTheme === "dark" ) {
      return (
        <BsMoonStarsFill className='w-6 h-6' role="button" 
          onClick={() => setTheme("light")}
        />
      )
    } else {
      return (
        <CgSun className='w-6 h-6' role="button" 
        onClick={() => setTheme("dark")}
      />
      )
    }
  }

  const { data: session } = useSession()
  
  

  return (

    // <div className='col-span-2 bg-red-100 flex flex-col items-center px-4 md:items-start'>
    <div className='w-[100%] h-[10vh] fixed bottom-0  bg-red-500 flex flex-row justify-evenly items-center px-5 
    
    md:col-span-2 md:min-h-[100vh] sm:bg-yellow-400 md:bg-gray-700 md:relative md:flex md:flex-col md:items-center md:justify-start 
    lg:items-start lg:bg-indigo-400
    '>
    
        <BsTwitter className=' hidden md:inline-block md:text-green-200 text-twitter m-3 w-9 h-9 dark:text-white '/>

        <SidebarRow Icon={BiHomeCircle} title='Home' />
        <SidebarRow Icon={RiHashtag} title='Explore' />
        <SidebarRow Icon={BiBell} title='Notifications' />

        <div className='hidden md:inline'> 
          <SidebarRow Icon={HiOutlineMail} title='Messages' />
          <SidebarRow Icon={BiBookmark} title='Bookmarks' />
          <SidebarRow Icon={RiFileListLine} title='Lists' />
        </div>

    

        <SidebarRow 
          Icon={BiUser} 
          title={session? "Sign out" : "Sign in"}  
          onClick={session? signOut : signIn}
        
        />

        <div className='hidden md:inlin'> 
          <SidebarRow Icon={HiOutlineDotsCircleHorizontal} title='More' />
        </div>

        {/* {renderThemeChanger()} */}
    </div>
  )
}

export default Sidebar