import React from 'react';
import './Button.css';

const AnimatedButton = ({content = 'Get Started', icon = 'true'}) => {
  return (
    <button className="animated-btn">
      <span className="uppercase text">{content}</span>
      { icon && <span className="icon">→</span>}
    </button>
  );
};
const ReverseAnimatedButton = ({content = 'Get Started', icon = 'true'}) => {
  return (
    <button className="reverse-animated-btn">
      <span className="uppercase text">{content}</span>
      { icon && <span className="icon">→</span>}
    </button>
  );
};


export {AnimatedButton, ReverseAnimatedButton};
