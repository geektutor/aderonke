import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import EachWork from "../compnents/eachWork";
import Nav from "../compnents/Nav";

import "../css/home.css";

const Work = () => {
  const [toggle, setToggle] = useState(false);
  const [blog, setBlog] = useState([]);
  console.log(blog);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch("https://api.geektutor.xyz/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`pd-home ${toggle ? "btheme" : ""}`}>
      <Nav handleToggle={handleToggle} other={'true'} />

      <div className="top">
        <div className="intro">
          <div className="text">
            <h1 className={`${toggle ? "bthemeT" : ""}`}>My works</h1>
          </div>
          <ul className={`${toggle ? "bthemeT" : ""}`}>
            <li>
              <Link to="/#about">Bio</Link>
            </li>
            <li>
              <Link to="/#work">work</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <label class="switch">
                <input onClick={handleToggle} type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div id="work" className={`work ${toggle ? "bg" : ""}`}>
        <div className="coverWork">
        
          <div className="workDiv">
            
            <EachWork
              toggle={toggle}
              title={"Kuizu"}
              text={
                "orem Ipsom Idolor nes i don’t know what I’m flipping typing butI need placeholder text so I just have to keep going.This issomewhat like a second paragraph, you know"
              }
              url={"https://www.youtube.com/"}
            />
            <EachWork
              toggle={toggle}
              title={"Kuizu"}
              text={
                "orem Ipsom Idolor nes i don’t know what I’m flipping typing butI need placeholder text so I just have to keep going.This issomewhat like a second paragraph, you know"
              }
              url={"https://www.youtube.com/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
