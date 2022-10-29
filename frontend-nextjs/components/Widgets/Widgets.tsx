import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import TimeLine from './TimeLine/TimeLine'


function Widgets() {
  return (
    <div className='hidden lg:inline max-h-screen col-span-2 px-2 mt-2 '>

        <SearchBar />
        <TimeLine  />   
        
    </div>
  )
}

export default Widgets