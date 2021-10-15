import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HashLink as Link } from "react-router-hash-link";
import Nav from "../compnents/Nav";
import "../css/home.css";

const BlogPost = () => {
  const [toggle, setToggle] = useState(false);
  const [blog, setBlog] = useState(null);
  console.log(blog);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const {id}=useParams()

  useEffect(() => {
    fetch(`https://api.geektutor.xyz/wp-json/wp/v2/posts/${id}`)
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
      <Nav handleToggle={handleToggle} other={"true"} />

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
              <label className="switch">
                <input onClick={handleToggle} type="checkbox" />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div id="blog" className={`blog extra ${toggle ? "bg" : ""}`}>
        <div className="coverBlog">
          <div className="allBlog">
          

              {
                  blog &&    
                  <>
                  <div className="pic">
                  <img
                    src="https://ik.imagekit.io/uknntomzctt/Geek/72_3Zoey6oME.png?updatedAt=1634217017945"
                    alt="Geek"
                  />
                </div>
                {/* des={item.excerpt && item.excerpt.rendered}
                    name={item.title && item.title.rendered}
                    id={item.id} */}
                <div id="about" className="about">
                  <h2 className={`topic }`}>{blog.title.rendered}</h2>
                  <p style={{width:'100%'}} className={`first `} dangerouslySetInnerHTML={{__html: blog.content.rendered}} >
                 
                  </p>
              
                </div>
                </>
              }

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
