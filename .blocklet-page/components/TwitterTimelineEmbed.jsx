import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default (props) => {
  return (
    <div style={{ maxHeight: 400, overflowY: 'scroll' }}>
      <TwitterTimelineEmbed {...props} />
    </div>
  );
};
