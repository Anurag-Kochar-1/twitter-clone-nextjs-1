import React , {useState} from 'react'
import { AiOutlineCalendar ,  } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiImage } from "react-icons/bi"

function FeedTweetBox() {
    const [input, setInput] = useState<string>('')
    
  return (
    <div className='flex space-x-2 p-5'>
        <img className='h-14 w-14 object-cover rounded-full mt-4' src="https://links.papareact.com/gll" alt="placeholder" />

        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                    type="text"
                    placeholder="What's Happening?"
                    className='h-24 w-full text-xl outline-none  placeholder:text-xl'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                 />

                 <div className='flex  items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        <BiImage  className='h-5 w-5 cursor-pointer 
                            transition-transform duration-150 ease-out hover:scale-150
                            ' 
                            
                        />
                        <BsEmojiSmile className='h-5 w-5' />
                        <AiOutlineCalendar className='h-5 w-5' />
                        <HiOutlineLocationMarker className='h-5 w-5' />
                    </div>

                    <button 
                        disabled={!input} 
                        className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40 disabled:cursor-not-allowed'> Tweet </button>
                 </div>
            </form>

        </div>
    </div>
  )
}

export default FeedTweetBox