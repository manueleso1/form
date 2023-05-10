import React from 'react';
import  './Button.css';



const Button = props => {
  return (
    <Button type={props.type} className="button" onClick={props.onClick}>
    {props.children}</Button>
  );
};

export default Button;
