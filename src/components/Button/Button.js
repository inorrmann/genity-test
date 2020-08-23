import React from 'react';
import './style.css';

function ButtonLink(props) {
  return (
  <button style={props.style}>{props.text}</button>
  )
} 

export default ButtonLink;