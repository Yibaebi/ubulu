/* eslint-disable react/prop-types */
import React from 'react'
import '../index.css'

const Button = ({ title = 'Contact Us' }) => {
  return <button>{title}</button>
}

export default Button
