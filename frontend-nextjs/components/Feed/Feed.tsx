import React, { useState } from 'react'
import {BiRefresh} from "react-icons/bi"
import { Tweet } from '../../typings'
import FeedTweetBox from './FeedTweetBox/FeedTweetBox'
import TweetComponent from "../Tweet/Tweet"
import { fetchTweets } from '../../utils/fetchTweets'
// import toast , {Toaster} from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



interface Props {
  tweets : Tweet[]
}

function Feed( {tweets : tweetsProp}:Props ) {
  console.log(tweetsProp);

  const [tweets, setTweets] = useState <Tweet[]> (tweetsProp)

  const handleRefresh = async () => {

    // const refreshNotifyToast = () => toast("Feed updated");
    // const refreshToast = toast.loading("Refreshing....")

    const tweets = await fetchTweets()
    setTweets(tweets)

    // toast.success("Feed updated!", {
    //   id : refreshToast
    // })
  }
  

  return (
    <div className='col-span-7 lg:col-span-5 border-x max-h-screen overflow-scroll scrollbar-hide'>
      {/* <Toaster /> */}

      <div className='flex items-center justify-between '>
        <h1 className='p-5 pb-0 text-xl font-bold'> Home </h1>
        <BiRefresh className='w-8 h-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out 
        hover:rotate-180 active:scale-125'
        onClick={handleRefresh}
        
        />

      </div>

      <div>
        <FeedTweetBox setTweets={setTweets} />
      </div>

      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>


    </div>
  )
}

export default Feed