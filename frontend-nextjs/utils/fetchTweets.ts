import { Tweet } from "../typings"

export const fetchTweets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_PROD}api/getTweets`)
    const data = await res.json()
    const tweets:Tweet[] = data.tweets

    console.log("fetchTweets function is running from fetchTweets.ts");
    return tweets
}