import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../compnents/Nav";
import OneBlog from "../compnents/oneBlog";
import "../css/home.css";

const AllBlog = () => {
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

      <div className="top extra">
        <div className="intro">
          <div className="text">
            <h1 className={`${toggle ? "bthemeT" : ""}`}>Blog</h1>
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

      <div id="blog" className={`blog extra ${toggle ? "bg" : ""}`}>
        <div className="coverBlog">
          <div className="allBlog">
            {blog &&
              blog.map((item) => {
                return (
                  <OneBlog
                    key={item.id}
                    des={item.excerpt && item.excerpt.rendered}
                    name={item.title && item.title.rendered}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
