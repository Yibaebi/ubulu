import styles from "./styles.module.css";
import { ReactComponent as Logo } from "../../assets/footer-logo.svg";
import { ReactComponent as Icon } from "../../assets/Footer-Icon.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter-Icon.svg";
import { ReactComponent as Linkedin } from "../../assets/LinkedIn-Icon.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram-Icon.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.sec_one}>
          <Logo className={styles.logo} />
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
        <div className={styles.sec_two}>
          <hr />
        </div>
        <div className={styles.sec_three}>
          <div className={styles.copyright}>
            <p className={styles.copy}>
              Copyright © 2021 UI8 LLC. All rights reserved
            </p>
            <a href="#" className={styles.privacy}>
              Privacy Policy
            </a>
            <a href="#" className={styles.terms}>
              Terms of Use
            </a>
          </div>
          <div>
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
      </div>
    </>
  );
};

export default Footer;
