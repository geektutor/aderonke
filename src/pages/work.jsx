import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import EachWork from "../compnents/eachWork";
import Nav from "../compnents/Nav";

import "../css/home.css";

const Work = () => {
  const [toggle, setToggle] = useState(false);
  const [work, setWork] = useState([]);
  console.log(work);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch("https://api.geektutor.xyz/wp-json/wp/v2/works")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWork(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`pd-home ${toggle ? "btheme" : ""}`}>
      <Nav handleToggle={handleToggle} other={'true'} />

      <div className="top extra">
        <div className="intro">
          <div className="text">
            <h1 className={`${toggle ? "bthemeT" : ""}`}>My works</h1>
          </div>
          <ul className={`${toggle ? "bthemeT" : ""}`}>
            <li>
              <Link to="/#about">Bio</Link>
            </li>
            <li>
              <Link to="#">Work</Link>
            </li>
            <li>
              <Link to="/#blog">Blog</Link>
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

      <div id="work" className={`work extra ${toggle ? "bg" : ""}`}>
        <div className="coverWork">
        
          <div className="workDiv">
            {
              work && work.map((item)=>{
                return(
                  <EachWork
                  toggle={toggle}
                  title={item.title.rendered}
                  text={
                    item.content.rendered
                  }
                  img={item.acf.length && item.acf.images}
                  url={item.acf.link}
                />
                )
               
              })
            }
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
