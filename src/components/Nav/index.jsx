/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './styles.module.css'
import { CloseIcon, HamburgerMenu } from '../../assets'
import { useWindowSize } from '../../hooks'
import Logo from '../../assets/TitleLogo.svg'
import { ReactComponent as Twitter } from '../../assets/Twitter-Icon.svg'
import { ReactComponent as Linkedin } from '../../assets/LinkedIn-Icon.svg'
import { ReactComponent as Instagram } from '../../assets/Instagram-Icon.svg'

const LandingNav = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash || 'home')
  const [showWhiteNav, setShowWhiteNav] = useState(false)
  const createHashLink = useCallback(link => `${link.toLowerCase().split(' ').join('-')}`, [])
  const [mobileIsLaunched, setMobileIsLaunched] = useState(false)

  const { width: windowWidth } = useWindowSize()

  const isMobile = useMemo(() => windowWidth < 1124, [windowWidth])
  const NAV_ITEMS = useMemo(
    () =>
      !isMobile
        ? ['Home', 'Home', 'About us', 'Our Services', 'Contact Us']
        : ['Home', 'About us', 'Our Services', 'Contact Us'],
    [isMobile],
  )

  const isActiveLink = useCallback(
    (link, ignore) => {
      if (ignore) {
        return false
      }

      return `#${createHashLink(link)}`.includes(activeLink)
    },
    [createHashLink, activeLink],
  )

  const handleLinkClick = (e, link) => {
    e.preventDefault() // Stop Page Reloading
    setMobileIsLaunched(false)

    const hashLink = createHashLink(link)
    setActiveLink(hashLink)

    const section = document.getElementById(hashLink)
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const toggleWhiteNav = () => setShowWhiteNav(() => document.documentElement.scrollTop > 200)

    window.addEventListener('scroll', toggleWhiteNav)
    return () => window.removeEventListener('scroll', toggleWhiteNav)
  }, [])

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''} ${showWhiteNav ? styles.white : ''}`}>
      {isMobile ? (
        <div className={styles.mobile_container}>
          <a href="#home" onClick={e => handleLinkClick(e, 'home')} className={styles.mobile_logo}>
            <img src={Logo} alt="logo" />
          </a>
          <HamburgerMenu className={styles.hamburger_menu} onClick={() => setMobileIsLaunched(state => !state)} />
        </div>
      ) : (
        <div className={styles.nav_links__container}>
          <ul className={`${styles.nav_links}  ${isMobile ? styles.mobile : ''}`}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isActiveLink(item, idx === 0)
              return (
                <li className={`${styles.nav_link__item} ${isActive ? styles.active : ''}`} key={idx}>
                  <a href={`#${createHashLink(item)}`} onClick={e => handleLinkClick(e, item)}>
                    {idx === 0 ? <img src={Logo} alt="logo" /> : item}
                  </a>
                </li>
              )
            })}
          </ul>

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
      )}

      {isMobile && mobileIsLaunched && (
        <div className={styles.mobile_nav_links__container}>
          <CloseIcon className={styles.close_icon} onClick={() => setMobileIsLaunched(state => !state)} />
          <a href="#home" onClick={e => handleLinkClick(e, 'home')} className={styles.mobile_nav_links__logo}>
            <img src={Logo} alt="logo" />
          </a>

          <ul className={`${styles.mobile_nav_links}`}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isActiveLink(item)
              return (
                <li className={`${styles.mobile_nav_link__item} ${isActive ? styles.active : ''}`} key={idx}>
                  <a onClick={e => handleLinkClick(e, item)} href={`#${createHashLink(item)}`}>
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export { LandingNav }
