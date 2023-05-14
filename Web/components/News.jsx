import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const LatestTweets = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className="flex justify-center text-2xl lg:text-4xl text-black mt-5 mb-5">Latest News</h1>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Chemotronix"
        options={{ height: 400, tweetLimit: 5 }}
        noScrollbar
        noFooter
      />
    </div>
  );
};

export default LatestTweets;
