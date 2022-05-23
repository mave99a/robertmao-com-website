import React from 'react';
import PropTypes from 'prop-types';
import urlFileManager from 'less/lib/less-node/url-file-manager';

function BigText({ tag, text, size }) {
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
        background: `url(https://cdn.coda.io/assets/8438f078d683/img/bg-tomato.jpg)`,
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
};

BigText.defaultProps = {
  tag: '',
  text: '',
  size: '',
};

export default BigText;
