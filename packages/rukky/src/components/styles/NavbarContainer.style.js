import React from 'react'
import { styled } from 'frontity'

const NavbarContainer = styled.div`
    .mobile-nav {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: white !important;
  width: 90vw;
  height: 100vh;
  border-right: 37px solid #0C618D;
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
  z-index: 1;
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}

.mobile-nav .nav-links-container {
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

.mobile-nav .nav-links-container .nav-links {
  margin: auto;
}

.mobile-nav .nav-links-container .nav-links ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 23px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.mobile-nav .nav-links-container .nav-links ul li a {
  text-decoration: none;
  font-weight: bold;
  font-size: 44px;
  line-height: 60px;
  color: #0A5E88;
}

.mobile-nav .nav-circles {
  position: absolute;
  bottom: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 19px;
}

.mobile-nav .nav-circles .circle {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: rgba(29, 158, 222, 0.52);
}

#none {
  left: -600px;

}

@media (min-width: 1000px) {
  .mobile-nav {
    width: 478px;
    height: 600px;
  }
}
`

export default NavbarContainer