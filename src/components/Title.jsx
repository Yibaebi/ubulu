/* eslint-disable react/prop-types */
import React from 'react'
import '../index.css'

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <div className="title_content">
        <h2>{title}</h2>
        <h3> {subtitle} </h3>
      </div>
    </div>
  )
}

export default Title
