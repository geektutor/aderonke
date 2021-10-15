import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EachWork from "../compnents/eachWork";
import LinkTo from "../compnents/linkTo";
import Nav from "../compnents/Nav";
import OneBlog from "../compnents/oneBlog";
import "../css/home.css";

const Home = () => {
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
        setBlog(data?.filter((val, i) => i <= 2));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`pd-home ${toggle ? "btheme" : ""}`}>
      <Nav handleToggle={handleToggle} />

      <div className="top">
        <div className="intro">
          <div className="text">
            <h1 className={`${toggle ? "bthemeT" : ""}`}>
              Hello, <br /> I’m Sodiq Akinjobi
            </h1>
          </div>
          <ul className={`${toggle ? "bthemeT" : ""}`}>
            <li>
              <a href="#about">Bio</a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              {" "}
              <a href="#blog">Blog</a>{" "}
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <label class="switch">
                <input onClick={handleToggle} type="checkbox" />
                <span class="slider round"></span>
              </label>
            </li>
          </ul>
        </div>
        <div className="prop">
          <ul className={`${toggle ? "bthemeT" : ""}`}>
            <li>Project manager</li>
            <li>Product manager</li>
            <li>Community advocate</li>
            <li>Wordpress babalawo</li>
          </ul>
        </div>
      </div>
      <div className="pic">
        <img
          src="https://ik.imagekit.io/uknntomzctt/Geek/72_3Zoey6oME.png?updatedAt=1634217017945"
          alt="Geek"
        />
      </div>

      <div id="about" className="about">
        <h2 className={`topic ${toggle ? "bthemeT" : ""}`}>About me</h2>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          Sodiq Akinjobi is the recent past Student Lead of the University of
          Lagos’ community which launched in 2018 and in the past year,
        </p>
        <p className={`second ${toggle ? "bthemeT" : ""}`}>
          Played with Wapka, Webs and those sites back in the days Geeking out
          with HTML, CSS and PHP since 2012. WordPress since 2013. Transitioned
          into Product Management in 2021. Passionate about Tech, Community and
          Education. Co-organizer of WordPress Lagos Meetup Group.
        </p>

        <div className="resume">
          <LinkTo
            text={"My resume"}
            toggle={toggle}
            url={"https://www.youtube.com/"}
          />
        </div>
      </div>

      <div id="work" className={`work ${toggle ? "bg" : ""}`}>
        <div className="coverWork">
    
          <div className="heading">
            <h2 className={`topic`}>My works</h2>
            <Link to='/works' className="see">See all</Link>
          </div>
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

      <div className="about">
        <h2 className={`topic ${toggle ? "bthemeT" : ""}`}>Experience</h2>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          Played with Wapka, Webs and those sites back in the days.
        </p>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          Geeking out with HTML, CSS and PHP since 2012. WordPress since 2013.
          Transitioned into Product Management in 2021.
        </p>

        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          WordPress since 2013. Transitioned into Product Management in 2021.
          Passionate about Tech, Community and Education. Co-organizer of
          WordPress Lagos Meetup Group.
        </p>

        <p className={`second ${toggle ? "bthemeT" : ""}`}>
          Lead of the Google Developer Student Club Unilag (2019-20) and
          increased club membership by over 2k people. Served as Chairman of the
          Engineering Career Expo. Co-organizer of WordPress Lagos Meetup Group.
        </p>
      </div>

      <div id="blog" className={`blog ${toggle ? "bg" : ""}`}>
        <div className="coverBlog">
          <div className="heading">
            <h2 className={`topic`}>Blog</h2>
            <Link to='/blogs' className="see">See all</Link>
          </div>

         

          <div className="allBlog">
          {
            blog && blog.map((item)=>{
              return(
                <OneBlog key={item.id} des={item.excerpt && item.excerpt.rendered} name={item.title && item.title.rendered} />
              )
            })
          }
          </div>
        </div>
      </div>

      <div id="contact" className="blog">
        <div className="coverBlog">
          <h2 className={`topic ${toggle ? "bthemeT" : ""}`}>Contact</h2>

          <div className="eachBlog">
            <LinkTo
              toggle={toggle}
              text={"sodiq.akinjobi@gmail.com"}
              isImg={"yes"}
              url={"https://www.youtube.com/"}
            />
          </div>
          <div className="eachBlog">
            <LinkTo
              toggle={toggle}
              text={"LinkedIn"}
              img={"link"}
              url={"https://www.youtube.com/"}
            />
          </div>
          <div className="eachBlog">
            <LinkTo
              toggle={toggle}
              text={"Twitter"}
              img={"twit"}
              url={"https://www.youtube.com/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
