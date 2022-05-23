import React from 'react';

function BigText({ tag, text }) {
  return (
    <div>
      <div>{tag}</div>
      <div>{text}</div>
    </div>
  );
}

BigText.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
};

BigText.defaultProps = {
  tag: 'hello',
  text: '',
};

export default BigText;
