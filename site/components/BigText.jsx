import React from 'react';
import PropTypes from 'prop-types';

function BigText({ tag, text, size, bg }) {
  return (
    <div
      flex=""
      items="center"
      style={{
        color: `black`,
        fontSize: `${size}`,
        padding: `50px`,
        fontFamily: `Calibre-R,sans-serif`,
        letterSpacing: `-.04em`,
        background: `${bg}`,
      }}>
      <div>{tag}</div>
      <div>{text}</div>
    </div>
  );
}

BigText.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  bg: PropTypes.string,
};

BigText.defaultProps = {
  tag: '',
  text: '',
  size: '',
};

export default BigText;
