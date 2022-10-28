import React from 'react'
import { IconType } from 'react-icons'


interface Props {
    Icon:  IconType
    title: string
}

function SidebarRow( {Icon, title}: Props){
  return (

    <div className='max-w-fit group flex items-center space-x-3 px-4 py-3 rounded-full hover:bg-gray-100 hover:cursor-pointer 
    transition-all duration-200 
    '>
        <Icon className='w-6 h-6'/>
        <p className='hidden md:inline-flex group-hover:text-twitter
        text-base font-light lg:text-xl lg:font-medium
        '> {title} </p>
    </div>
  )
}

export default SidebarRow