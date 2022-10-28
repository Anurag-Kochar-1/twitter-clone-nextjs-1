import React, {useEffect, useState} from 'react'
import { Tweet } from '../../typings'
import TimeAgo from "react-timeago"

import { RiChat3Line } from "react-icons/ri"
import { AiOutlineHeart } from "react-icons/ai"
import { BiUpload } from "react-icons/bi"
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { fetchComments } from '../../utils/fetchComments'
import {Comment} from "../../typings"
import CommentComponent from '../Comment/Comment'


interface Props {
    tweet : Tweet
}

function Tweet ( {tweet}:Props ) {


    const [commentsState, setCommentsState] = useState <Comment[]> ([])

    const refreshComments = async () => {
        const comments:Comment[] = await fetchComments(tweet._id)
        setCommentsState(comments)
    }

    useEffect(() => {
        refreshComments()
    },[])

    console.log(commentsState);
    
    

  return (
    <div className='flex flex-col space-x-3 p-5 border-y border-gray-100'>
        <div className='flex space-x-1'>
            <img className='h-10 w-10 mr-2 rounded-full object-cover' src={tweet.profileImg} alt='profile-image' />

            <div>
                <div className="flex items-center space-x-1">
                    <p className='mr-1 font-bold'> {tweet.username} </p> 
                    <p className='hidden text-sm text-gray-500 sm:inline'> @{tweet?.username.replace(/\s+/g, '').toLowerCase()} • </p> 

                    <TimeAgo 
                        className="text-sm text-gray-500"
                        date={tweet._createdAt}
                    />
                </div>

                <p className='pt-1'> {tweet.text} </p>

                {tweet.image && (
                    <img 
                        src={tweet.image} 
                        alt="tweet-image" 
                        className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm' />
                )}
            </div>
        </div>

        <div className='mt-5 flex justify-between'>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <RiChat3Line  className='w-5 h-5'/>
                <p> 5 </p>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <HiOutlineSwitchHorizontal className='w-5 h-5'/>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <AiOutlineHeart className='w-5 h-5'/>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <BiUpload className='w-5 h-5'/>
            </div>
        </div>

        {commentsState?.length > 0 && (
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
                {commentsState.map((comment) => (
                    <CommentComponent key={comment._id} commentData={comment} />
                ))}
            </div>
        )}
    </div>
  )
}

export default Tweet