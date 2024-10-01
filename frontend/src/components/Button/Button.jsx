import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text }) {
  return (
    <div
      className={`button ${text === 'Login' ? 'login-button' : ''}`}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;