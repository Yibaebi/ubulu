import Logo from "../assets/TitleLogo.svg";
import "../index.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <div className="title_content">
        <h2>{title}</h2>
        <h3> {subtitle} </h3>
      </div>
      <img src={Logo} alt="" />
    </div>
  );
};

export default Title;
