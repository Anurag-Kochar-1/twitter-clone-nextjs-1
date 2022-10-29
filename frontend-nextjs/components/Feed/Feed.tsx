import React, { useState , useEffect } from 'react'
import {BiRefresh} from "react-icons/bi"
import { Tweet } from '../../typings'
import FeedTweetBox from './FeedTweetBox/FeedTweetBox'
import TweetComponent from "../Tweet/Tweet"
import { fetchTweets } from '../../utils/fetchTweets'
import { GetServerSideProps } from 'next'
// import toast , {Toaster} from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



interface Props {
  tweets : Tweet[]
}

function Feed( {tweets : tweetsProp}:Props ) {
  // console.log(tweetsProp);

  const [tweets, setTweets] = useState <Tweet[]> (tweetsProp)

  const handleRefresh = async () => {
    console.log('refreshing feed.. is executed');
    

    const fetchingNewtweets = await fetchTweets()

    // variable name changed to fetchingNewtweets from tweets
    setTweets(fetchingNewtweets)
    alert("updated")

  }

  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHydrated(true)
    console.log(`setHydrated is set to true`);
    
  },[])


  if(!hydrated) return null

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
      {/* <button onClick={() => console.log(tweets)} > LOG tweets </button> */}
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>


    </div>
  )
}

export default Feed


