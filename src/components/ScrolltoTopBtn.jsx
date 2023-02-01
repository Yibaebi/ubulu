import React, { useEffect, useState } from 'react'
import '../index.css'
// import { FaAngleDoubleUp } from "react-icons/fa";
import { ReactComponent as Icon } from '../assets/Footer-Icon.svg'
const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <div className="scrollbtn">
      <Icon className="btn" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
    </div>
  )
}

export { ScrollButton }
