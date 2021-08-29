import React from 'react'
import { connect, styled } from 'frontity'


const HeaderContainer = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap");
:root {
  --role-font-size: 22.5px;
  --role-font-size-grow: 25.5px;
}

body {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.header {
  background-color: #001A27;
  color: white;
  height: 90vh;
  font-family: 'Nunito Sans', sans-serif;
  position: relative;
}

.header nav {
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

.header nav .nav-container {
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 90%;
  margin-top: 45px;
}

.header nav .nav-container .navBtn-container {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #DAF0FC;
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
  gap: 4px;
}

.header nav .nav-container .navBtn-container .bar {
  border-radius: 5px;
  background: #013B59;
  width: 36px;
  height: 8px;
}

.header nav .nav-container .download-resume-container .download-btn {
  font-family: 'Nunito Sans', sans-serif;
  padding: 15px 35px;
  background: rgba(242, 253, 255, 0.9);
  border: none;
  -webkit-box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
          box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.header .header-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 2.5rem;
  height: 45vh;
}

.header .header-container .header-contents {
  margin: auto;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.header .header-container .header-contents .right-side {
  font-size: 32px;
  color: #88CEF2;
}

.header .header-container .header-contents .right-side p {
  color: rgba(255, 255, 255, 0.47);
}

.header .header-container .header-contents .left-side {
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

.header .header-container .header-contents .left-side .roles {
  width: 100%;
  margin: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  flex-direction: column;
}

.header .header-container .header-contents .left-side .roles h3 {
  font-size: var(--role-font-size);
  opacity: 0.4;
  -webkit-transition: 3s all;
  transition: 3s all;
  text-align: center;
  margin: 15px;
}

.header .header-container .header-contents .left-side .roles .role1 {
  -webkit-animation: animate-text-1 10s ease-in-out infinite;
          animation: animate-text-1 10s ease-in-out infinite;
}

.header .header-container .header-contents .left-side .roles .role2 {
  -webkit-animation: animate-text-2 10s ease-in-out infinite;
          animation: animate-text-2 10s ease-in-out infinite;
}

.header .header-container .header-contents .left-side .roles .role3 {
  -webkit-animation: animate-text-3 10s ease-in-out infinite;
          animation: animate-text-3 10s ease-in-out infinite;
}

.header .header-container .header-contents .left-side .roles .role4 {
  -webkit-animation: animate-text-4 10s ease-in-out infinite;
          animation: animate-text-4 10s ease-in-out infinite;
}

@-webkit-keyframes animate-text-1 {
  0% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
}

@keyframes animate-text-1 {
  0% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
}

@-webkit-keyframes animate-text-2 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@keyframes animate-text-2 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@-webkit-keyframes animate-text-3 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@keyframes animate-text-3 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  75% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@-webkit-keyframes animate-text-4 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@keyframes animate-text-4 {
  0% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  25% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  50% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
  75% {
    font-size: var(--role-font-size-grow);
    opacity: 1;
  }
  100% {
    font-size: var(--role-font-size);
    opacity: 0.4;
  }
}

@media (min-width: 1000px) {
  :root {
    --role-font-size: 30.5px;
    --role-font-size-grow: 35.5px;
  }
  .header .header-container {
    padding: 4rem;
  }
  .header .header-container .header-contents .right-side {
    font-size: 32px;
    color: #88CEF2;
  }
  .header .header-container .header-contents .right-side p {
    color: rgba(255, 255, 255, 0.47);
  }
  .header .header-container .header-contents .left-side {
    position: absolute;
    right: 0px;
    top: 0px;
    background: rgba(255, 255, 255, 0.06);
  }
  .header .header-container .header-contents .left-side .roles {
    width: 600px;
    height: 75vh;
  }
}
/*# sourceMappingURL=style.css.map */
`

export default HeaderContainer