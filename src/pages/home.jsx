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
          From the headline above, you can tell that I am a techie, and I love
          it. I love managing people, being a part of or leading a team to build
          incredible products that scale. It explains why I am a PM and a
          community advocate.
        </p>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          You must be wondering, "Why Babalawo?" Well, I am quite good at what I
          do in the WordPress world, so much that my friends say it's
          extraordinary. A Babalawo (the Yoruba word for a native doctor) has
          special powers, hence the nickname.
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
            <Link to="/works" className="see">
              See all
            </Link>
          </div>
          <div className="workDiv">
            <EachWork
              toggle={toggle}
              title={"Kuizu"}
              text={
                "Kuizu is an Anime quiz app for Otakus. I was the Product Manager for this app. I was responsible for assigning tasks to teams, getting people to partake in a survey and contribute to a question bank, and ensuring that things were up and ready in time for the launch."
              }
              url={"https://www.youtube.com/"}
            />
            <EachWork
              toggle={toggle}
              title={"Kuizu"}
              text={
                "Kuizu is an Anime quiz app for Otakus. I was the Product Manager for this app. I was responsible for assigning tasks to teams, getting people to partake in a survey and contribute to a question bank, and ensuring that things were up and ready in time for the launch."
              }
              url={"https://www.youtube.com/"}
            />
          </div>
        </div>
      </div>

      <div className="about">
        <h2 className={`topic ${toggle ? "bthemeT" : ""}`}>Experience</h2>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          It started from the days I used to play with Wapka, Webs and similar
          sites. I started geeking with HTML, CSS, and PHP in 2012 and then
          WordPress in 2013. I did that for a while, working individually or
          within a team to create beautiful websites, helping people to bring
          their idea to a reality using digital products.
        </p>
        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          In 2021, I transitioned fully into Product Management, after
          practising as a rookie PM for a few years. I took a couple of courses
          , including a ProductDive PM Course.
        </p>

        <p className={`first ${toggle ? "bthemeT" : ""}`}>
          I am passionate about tech, community, and education. I have
          demonstrated this in various capacities: Co-organizer of WordPress
          Lagos Meetup Group, Lead of the Google Developer Student Club, UNILAG
          (2019-2020), where I increased club membership by over 2k people,
          Chairman of the Engineering Career Expo, and other roles I have taken
          up and executed excellently.
        </p>
      </div>

      <div id="blog" className={`blog ${toggle ? "bg" : ""}`}>
        <div className="coverBlog">
          <div className="heading">
            <h2 className={`topic`}>Blog</h2>
            <Link to="/blogs" className="see">
              See all
            </Link>
          </div>

          <div className="allBlog">
            {blog &&
              blog.map((item) => {
                return (
                  <OneBlog
                    key={item.id}
                    id={item.id}
                    des={item.excerpt && item.excerpt.rendered}
                    name={item.title && item.title.rendered}
                  />
                );
              })}
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
              isMail={true}
              url={"https://www.youtube.com/"}
            />
          </div>
          <div className="eachBlog">
            <LinkTo
              toggle={toggle}
              text={"LinkedIn"}
              img={"link"}
              isMail={true}
              url={"https://www.youtube.com/"}
            />
          </div>
          <div className="eachBlog">
            <LinkTo
              toggle={toggle}
              text={"Twitter"}
              img={"twit"}
              isMail={true}
              url={"https://www.youtube.com/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
