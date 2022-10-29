import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed/Feed'
import Sidebar from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import { Toaster } from "react-hot-toast"

import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }:Props ) => {
  console.log(tweets);
  
  return (

    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title> Twitter Clone </title>
        <link rel="shortcut icon" href="/twitterfavicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>

         <Sidebar />
         <Feed tweets = {tweets} />
         <Widgets />


      </main>

      
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()


  return {
    props: {
      tweets
    }
  }
}