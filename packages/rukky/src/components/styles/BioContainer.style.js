import React from 'react'
import { connect, styled } from 'frontity'

const BioContainer = styled.div`
    .bio {
  margin: 40px;
}

.bio .section-header h2 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #0A5E88;
  font-size: 30px;
  line-height: 64px;
}

.bio .bio-contents .images-container {
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

.bio .bio-contents .images-container .images {
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}

.bio .bio-contents .images-container .images img {
  width: 300px;
}

.bio .bio-contents .bio-experience {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: 50px;
}

.bio .bio-contents .bio-experience .experience-container {
  margin: auto;
  width: 95%;
}

.bio .bio-contents .bio-experience .experience-container .experience {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  gap: 30px;
  align-items: center;
}

.bio .bio-contents .bio-experience .experience-container .experience .img img {
  width: 3vw;
}

.bio .bio-contents .bio-experience .experience-container .experience p {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  color: rgba(10, 22, 65, 0.6);
  line-height: 140%;
}

@media (min-width: 1000px) {
  .bio .section-header {
    margin-left: 40px;
  }
  .bio .bio-contents .images-container .images {
    overflow-x: auto;
  }
  .bio .bio-contents .images-container .images img {
    width: 450px;
  }
  .bio .bio-contents .bio-experience .experience-container .experience {
    margin: 10px;
  }
  .bio .bio-contents .bio-experience .experience-container .experience .img img {
    width: 2.5vw;
  }
  .bio .bio-contents .bio-experience .experience-container .experience p {
    font-size: 1.6rem;
  }
}
`

export default BioContainer;