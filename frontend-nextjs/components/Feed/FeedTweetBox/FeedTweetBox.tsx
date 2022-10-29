import React , {useState , useRef} from 'react'
import { AiOutlineCalendar ,  } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiImage } from "react-icons/bi"
import { useSession } from "next-auth/react"
import {  Tweet, TweetBody } from '../../../typings'
import { fetchTweets } from '../../../utils/fetchTweets'


interface Props {
    setTweets: React.Dispatch<React.SetStateAction<Tweet[]>>
}


function FeedTweetBox( {setTweets}:Props ) {
    const [input, setInput] = useState<string>('')
    const { data: session } = useSession()
    
    const [imageUrlBoxIsOpen , setImageUrlBoxIsOpen] = useState <boolean> (false)
    const [image, setImage] = useState<string>('')
    const imageInputRef = useRef<HTMLInputElement>(null)

    

    const addImageToTweet =  (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if(!imageInputRef.current?.value) return;
        setImage(imageInputRef.current?.value)
        imageInputRef.current.value = ""
        setImageUrlBoxIsOpen(false)

    }


    const postTweet = async () => {
        const tweetInfo: TweetBody = {
            text: input,
            username: session?.user?.name || "Unknown User",
            profileImg: session?.user?.image || "https://links.papareact.com/gll",
            image: image
        }

        const result = await fetch(`/api/addTweet`, {
            body: JSON.stringify(tweetInfo),
            method: "POST"
        })

        const json = await result.json()

        const newTweets = await fetchTweets()
        setTweets(newTweets)

        return json
    }

    // ADDING TWEET TO BACKEND THROUGH MUTATIONS
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        e.preventDefault()
        
        postTweet()

        setInput('')
        setImage('')
        setImageUrlBoxIsOpen(false)
    }
    
  return (
    <div className='flex space-x-2 p-5'>
        <img className='h-14 w-14 object-cover rounded-full mt-4' src={ session?.user?.image || "https://links.papareact.com/gll" } alt="placeholder" />

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
                        <BiImage  
                            className='h-5 w-5 cursor-pointer 
                            transition-transform duration-150 ease-out hover:scale-150' 
                            onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                            
                        />
                        <BsEmojiSmile className='h-5 w-5' />
                        <AiOutlineCalendar className='h-5 w-5' />
                        <HiOutlineLocationMarker className='h-5 w-5' />
                    
                    </div>

                    <button 
                        disabled={!input || !session} 
                        className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40 disabled:cursor-not-allowed'
                        onClick={handleSubmit}
                        >  
                        Tweet
                    </button>
                 </div>

                 {imageUrlBoxIsOpen && (
                    <form className='mt-5 flex rounded-lg bg-twitter/80 px-4 py-2'>
                        <input 
                            type="upload" 
                            placeholder='Enter Image URL' 
                            className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white'
                            ref={imageInputRef}
                            />

                        <button
                            type='submit'
                            className='font-bold text-white'
                            onClick={ addImageToTweet}
                        > Add Image </button>
                    </form>
                 )}

                 {
                    image && (
                        <img 
                            src={image} 
                            alt="tweet-image" 
                            className='mt-10 h-40 w-full rounded-xl object-contain shadow-lg'
                            />
                    )
                 }
            </form>  
        </div>
    </div>
  )
}

export default FeedTweetBox