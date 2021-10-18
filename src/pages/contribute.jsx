import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import EachWork from "../compnents/eachWork";
import Loader from "../compnents/Loader";
import Nav from "../compnents/Nav";
import { setTheme } from "../compnents/theme";

import "../css/home.css";

const Contribute = () => {
  const [toggle, setToggle] = useState(true);
  const [work, setWork] = useState([]);
  const [isPending, setIsPending] = useState(false);
  let theme = localStorage.getItem('theme');
  const handleToggle = () => {
   
    if (localStorage.getItem('theme') === 'true') {
      setTheme(false);
      setToggle(false)
  } else {
    setTheme(true);
    setToggle(true)
  }
  };
  
  useEffect(() => {
    if (localStorage.getItem('theme') === 'true') {
      setToggle(true)
    } else if (localStorage.getItem('theme') === 'false') {
      setToggle(false)
    }
}, [theme])

  useEffect(() => {
    fetch("https://api.geektutor.xyz/wp-json/wp/v2/works")
      .then((res) => res.json())
      .then((data) => {
    
        setWork(data);
        setIsPending(true)
      })
      .catch((err) => {
        console.log(err);
        setIsPending(true)
      });
  }, []);

  return (
    <div className={`pd-home ${toggle ? "btheme" : ""}`}>
        <Loader close={isPending}/>
      
      <Nav check={toggle} handleToggle={handleToggle} other={'true'} />

      <div className="top extra">
        <div className="intro">
          <div className="text">
            <h1 className={`${toggle ? "bthemeT" : ""}`}>My Contributions</h1>
          </div>
          <ul className={`${toggle ? "bthemeT" : ""}`}>
            <li>
              <Link to="/#about">Bio</Link>
            </li>
            <li>
              <Link to="#">Project</Link>
            </li>
            <li>
              <Link to="/#blog">Blog</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <label class="switch">
                <input checked={toggle} onClick={handleToggle} type="checkbox" />
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
              work && work.filter((item)=>{
                return item.data_category[0]===73
              }).map((item)=>{
                return(
                    <EachWork
                    toggle={toggle}
                    title={item.acf && item.acf.title}
                    text={
                      item.acf.description
                    }
                    img={item.acf.images}
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

export default Contribute;
