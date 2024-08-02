import React from 'react'

import ButtonProps from './Button.d';

const Button = ({
  shape,
  text,
  textColor,
  buttonColor,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 text-xl font-semibold cursor-pointer ${shape === 'rectangle' ? 'rounded-md' : 'rounded-full'}  ${textColor} ${buttonColor}`}>{text}</button>
  )
}

export default Button