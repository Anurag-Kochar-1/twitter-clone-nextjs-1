import { TwitterTimelineEmbed } from "react-twitter-embed"

import React from 'react'

function TimeLine() {
  return (
    <div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="anurag__kochar"
            options={{height: 400}}
        />
    </div>
  )
}

export default TimeLine