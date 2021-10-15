import arrow from "../assets/images/Arrow.svg";
import "../css/home.css";
import twit from "../assets/images/twit.svg";
import lin from "../assets/images/link.svg";
import { useHistory } from "react-router";

const LinkTo = ({ text, url, isMail, isImg, img, toggle }) => {
  const history = useHistory();
  const handleClick = () => {
    if (isMail) {
      window.open(url, "_blank");
    } else {
      history.push(url);
    }
  };
  return (
    <div onClick={handleClick} className="linkTo">
      <p
        className={`tt ${toggle ? (toggle === true ? "bthemeT" : "grey") : ""}`}
      >
        {text}
      </p>
      {isImg ? null : (
        <img src={img ? (img === "link" ? lin : twit) : arrow} alt="arrow" />
      )}
    </div>
  );
};

export default LinkTo;
