import React from 'react'
import { styled } from 'frontity'

const ShowcaseContainer = styled.div`
    .showcase .section-header {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.showcase .section-header .head-decoration {
  margin-left: 40px;
  width: 250px;
  height: 5px;
  background: linear-gradient(90.13deg, #1A84BA 69.14%, rgba(10, 94, 136, 0) 114.69%);
  border-radius: 0px 10px 10px 0px;
}

.showcase .section-header h2 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #0A5E88;
  font-size: 35px;
  line-height: 64px;
  margin-left: 40px;
}

.showcase .showcase-container {
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
  gap: 50px;
}

.showcase .showcase-container .showcase-content {
  font-family: 'Nunito Sans', sans-serif;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
}

.showcase .showcase-container .showcase-content .showcase-image {
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.showcase .showcase-container .showcase-content .showcase-image img {
  margin: auto;
  width: 300px;
  border-radius: 8px;
}

.showcase .showcase-container .showcase-content .showcase-description {
  width: 90vw;
}

.showcase .showcase-container .showcase-content .showcase-description h3 {
  font-family: 'Nunito Sans', sans-serif;
  color: #2599D2;
  font-weight: bold;
  font-size: 35px;
  line-height: 55px;
  margin: 10px 8px;
}

.showcase .showcase-container .showcase-content .showcase-description p {
  font-size: 20px;
  line-height: 28px;
  width: 90%;
  margin: 10px;
}

@media (min-width: 1000px) {
  .showcase {
    margin: 40px;
  }
  .showcase .section-header h2 {
    font-size: 40px;
  }
  .showcase .showcase-container .showcase-content {
    gap: 90px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .showcase .showcase-container .showcase-content .showcase-image img {
    width: 30vw;
  }
  .showcase .showcase-container .showcase-content .showcase-description {
    width: 40vw;
  }
  .showcase .showcase-container .reverse-flex {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
            flex-direction: row-reverse;
  }
}
`

export default ShowcaseContainer