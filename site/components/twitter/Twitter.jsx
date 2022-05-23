import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';

function Twitter() {
  return (
    <div>
      <TwitterTimelineEmbed sourceType="profile" screenName="mave99a" options={{ height: 400 }} />
    </div>
  );
}

export default Twitter;
