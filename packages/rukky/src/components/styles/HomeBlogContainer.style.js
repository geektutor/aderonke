import React from 'react'
import { styled } from 'frontity'

const HomeBlogContainer = styled.div`
    .blog {
  background: linear-gradient(103.31deg, #E9F8FF 8.36%, #E7F7FF 101.14%);
  padding-bottom: 50px;
}

.blog .section-header .svg {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}

.blog .section-header .svg .svg1 {
  width: 40px;
  height: 30px;
  border: 1px solid #0C2785;
  border-right: none;
  border-bottom: none;
  margin: 40px;
}

.blog .section-header .svg .svg2 {
  width: 40px;
  height: 30px;
  border: 1px solid #0C2785;
  border-left: none;
  border-bottom: none;
  margin: 40px;
}

.blog .section-header h2 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 55px;
  line-height: 75px;
  color: #0C628D;
  text-align: center;
}

.blog .blog-section-contents {
  font-family: 'Nunito Sans', sans-serif;
}

.blog .blog-section-contents .blog-section-caption p {
  text-align: center;
  font-size: 27px;
  line-height: 37px;
  letter-spacing: 0.01em;
}

.blog .blog-section-contents .blog-contents-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.blog .blog-section-contents .blog-contents-container .blog-contents {
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 20px;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.blog .blog-section-contents .blog-contents-container .blog-contents .blog-card {
  width: 350px;
  height: auto;
  padding: 20px;
  border-left: 2px solid #154A70;
}

.blog .blog-section-contents .blog-contents-container .blog-contents .blog-card .blog-content-title a {
  text-decoration: none;
  color: #1D77A4;
}

.blog .blog-section-contents .blog-contents-container .blog-btn-container {
  margin: 70px;
}

.blog .blog-section-contents .blog-contents-container .blog-btn-container .blog-btn {
  font-family: 'Nunito Sans', sans-serif;
  padding: 17px 34px;
  background: #0C94B1;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  border: none;
  font-size: 20px;
  line-height: 100%;
}

@media (max-width: 400px) {
  .blog .blog-section-contents .blog-contents-container .blog-contents .blog-card {
    padding: 3px;
  }
}
`

export default HomeBlogContainer;