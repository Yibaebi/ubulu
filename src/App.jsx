import Button from "./components/Button";
import Rotate from "./components/Rotate";
import Title from "./components/Title";
import Partner1 from "./assets/TechQuest.svg";
import Partner2 from "./assets/TechCircle.svg";
import Partner3 from "./assets/Caspania.svg";
import ExternalLink from "./assets/ExternalLinkIcon.svg";
import Bulb from "./assets/bulb.png";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.App}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.nav}>
          <h1>Navigation Bar</h1>
        </div>
        <div className={styles.hero_content}>
          <div className={styles.content}>
            <h1>Ubulu Africa</h1>
            <h2>Making Innovation Work</h2>
            <p>Center of excellence for end-to-end innovation activities</p>
            <Button />
          </div>
          <div className={styles.rotate_container}>
            <Rotate />
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className={styles.about_us_section}>
        <Title title="About Us" subtitle="An Innovation Management Group" />
        <div className={styles.about_content_section}>
          <div className={styles.about_content}>
            <p>
              Ubulu Africa is an innovation management group dedicated to
              helping individuals and organizations use technology to achieve
              the Sustainable Development Goals (SDGs).
            </p>
            <p>
              We are building a Centre of Excellence for end-to-end innovation
              activities required to solve problems in Africa.
            </p>
          </div>
          <img src={Bulb} alt="Light Bulb" />
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.services_section}>
        <Title title="Our Services" subtitle="Building Blocks for Innovation" />
      </div>

      {/* Partners Section */}
      <div className={styles.partners_section}>
        <h6>Our Partners</h6>
        <div className={styles.partners_content}>
          <div className={styles.partner}>
            <img src={Partner1} alt="" />
            <a href="https://www.tqstem.org/home/">
              Tech Quest <img src={ExternalLink} alt="External Links" />
            </a>
          </div>
          <div className={styles.partner}>
            <img src={Partner2} alt="" />
            <a href="https://www.techcircle.ng/">
              Tech Quest <img src={ExternalLink} alt="External Links" />
            </a>
          </div>
          <div className={styles.partner}>
            <img src={Partner3} alt="" />
            <a href="https://www.caspania.com/">
              Tech Quest <img src={ExternalLink} alt="External Links" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contact_section}>
        <Title title="Let’s connect" subtitle="Contact us" />
      </div>
    </div>
  );
}

export default App;
