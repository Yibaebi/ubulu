import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as Twitter } from '../../assets/Twitter-Icon.svg'
import { ReactComponent as Linkedin } from '../../assets/LinkedIn-Icon.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram-Icon.svg'
import { ubuluLogo } from '../../assets'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.sec_one}>
          <img src={ubuluLogo} alt="" className={styles.logo} />

          <nav>
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#our-services">Our Services</a>
            <a href="#contact-us">Contact Us</a>
          </nav>
        </div>
        <hr />
        <div className={styles.sec_three}>
          <div className={styles.copyright}>
            <p className={styles.copy}>Copyright © {new Date().getFullYear()} All rights reserved</p>
            <a href="#" className={styles.privacy}>
              Privacy Policy
            </a>
            <a href="#" className={styles.terms}>
              Terms of Use
            </a>
          </div>
          <div className={styles.social_links__container}>
            <a href="https://twitter.com/UbuluAfrica" target="_blank" rel="noreferrer">
              <Twitter className={styles.socials} />
            </a>
            <a href="https://www.linkedin.com/company/ubulu-africa" target="_blank" rel="noreferrer">
              <Linkedin className={styles.socials} />
            </a>
            <a href="https://www.instagram.com/Ubulu_africa/" target="_blank" rel="noreferrer">
              <Instagram className={styles.socials} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
