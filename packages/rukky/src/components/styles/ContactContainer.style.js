import React from 'react'
import { styled } from 'frontity'

const ContactContainer = styled.div`
.contact-me {
  margin-bottom: 60px;
}

.contact-me .section-header {
  margin: 30px;
}

.contact-me .section-header h2 {
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 68px;
  letter-spacing: 0.01em;
  color: #0A5E88;
}

.contact-me .contact-section-container {
  font-family: 'Nunito Sans', sans-serif;
  margin-bottom: 50px;
}

.contact-me .contact-section-container .contact-caption p {
  font-size: 27px;
  line-height: 37px;
  text-align: center;
}

.contact-me .contact-section-container .contact-links-container {
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

.contact-me .contact-section-container .contact-links-container .contact-links {
  width: 90%;
  margin: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(20rem, 1fr))[auto-fill];
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 20px;
}

.contact-me .contact-section-container .contact-links-container .contact-links .contact-cards a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-decoration: none;
  padding: 20px;
  border: 1px solid black;
  height: 20px;
  color: black;
  font-size: 20px;
  line-height: 34px;
}

.contact-me .contact-section-container .contact-links-container .contact-links .contact-cards a span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 30px;
}

@media (min-width: 1000px) {
  .contact-me .section-header {
    margin: 70px;
  }
  .contact-me .contact-section-container .contact-links-container .contact-links {
    width: 50%;
  }
}
@media (max-width: 600px){
  .contact-me .section-header{
    text-align: center;
  }
}
`
export default ContactContainer;