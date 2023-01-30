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
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    window.addEventListener('hashchange', () => setHash(window.location.hash))
    return () => window.removeEventListener('hashchange', () => setHash(window.location.hash))
  }, [])

  const createLinkHref = useCallback(link => `#${link.toLowerCase().split(' ').join('-')}`, [])
  const [mobileIsLaunched, setMobileIsLaunched] = useState(false)

  const { width: windowWidth } = useWindowSize()

  const isMobile = useMemo(() => windowWidth < 1090, [windowWidth])
  const NAV_ITEMS = useMemo(
    () =>
      !isMobile
        ? ['Home', 'Home', 'About us', 'Our Services', 'Contact Us']
        : ['Home', 'About us', 'Our Services', 'Contact Us'],
    [isMobile],
  )

  const isActiveLink = useCallback(
    (link, idx, ignore) => {
      if (ignore) {
        return false
      }
      if (link.toLowerCase().includes('home') && !hash) {
        return true
      } else {
        return createLinkHref(link).includes(hash)
      }
    },
    [isMobile, createLinkHref, hash],
  )

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      {isMobile ? (
        <div className={styles.mobile_container}>
          <a href="#home" className={styles.mobile_logo}>
            <img src={Logo} alt="logo" />
          </a>
          <HamburgerMenu className={styles.hamburger_menu} onClick={() => setMobileIsLaunched(state => !state)} />
        </div>
      ) : (
        <div className={styles.nav_links__container}>
          <ul className={`${styles.nav_links}  ${isMobile ? styles.mobile : ''}`}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isActiveLink(item, idx, idx === 0)
              return (
                <li className={`${styles.nav_link__item} ${isActive ? styles.active : ''}`} key={idx}>
                  <a
                    href={createLinkHref(item)}
                    onClick={() => {
                      setMobileIsLaunched(false)
                    }}
                  >
                    {idx === 0 ? <img src={Logo} alt="logo" /> : item}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={styles.social_links__container}>
            <a href="#">
              <Twitter className={styles.socials} />
            </a>
            <a href="">
              <Linkedin className={styles.socials} />
            </a>
            <a href="">
              <Instagram className={styles.socials} />
            </a>
          </div>
        </div>
      )}

      {isMobile && mobileIsLaunched && (
        <div className={styles.mobile_nav_links__container}>
          <CloseIcon className={styles.close_icon} onClick={() => setMobileIsLaunched(state => !state)} />
          <a href="#home" className={styles.mobile_nav_links__logo}>
            <img src={Logo} alt="logo" />
          </a>

          <ul className={`${styles.mobile_nav_links}`}>
            {NAV_ITEMS.map((item, idx) => {
              const isActive = isActiveLink(item, idx)
              return (
                <li className={`${styles.mobile_nav_link__item} ${isActive ? styles.active : ''}`} key={idx}>
                  <a onClick={() => setMobileIsLaunched(false)} href={createLinkHref(item)}>
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
