import React from 'react'

import {BsTwitter} from "react-icons/bs"
import { BiBell , BiBookmark , BiHomeCircle , BiUser } from "react-icons/bi"
import { RiHashtag , RiFileListLine } from "react-icons/ri"
import { HiOutlineMail , HiOutlineDotsCircleHorizontal } from "react-icons/hi"

import SidebarRow from './SidebarRow/SidebarRow'


function Sidebar() {
  return (

    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>

        <BsTwitter className='text-twitter m-3 w-9 h-9' />

        <SidebarRow Icon={BiHomeCircle} title='Home' />
        <SidebarRow Icon={RiHashtag} title='Explore' />
        <SidebarRow Icon={BiBell} title='Notifications' />
        <SidebarRow Icon={HiOutlineMail} title='Messages' />
        <SidebarRow Icon={BiBookmark} title='Bookmarks' />
        <SidebarRow Icon={RiFileListLine} title='Lists' />
        <SidebarRow Icon={BiUser} title='Profile' />
        <SidebarRow Icon={HiOutlineDotsCircleHorizontal} title='More' />
        
    </div>
  )
}

export default Sidebar