import { TwitterTimelineEmbed } from "react-twitter-embed"

import React from 'react'

function TimeLine() {
  return (
    <div
      className="h-screen "
      >
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="anurag__kochar"
            options={{height: 800}}
            
            
        />
    </div>
  )
}

export default TimeLine