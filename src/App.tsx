import React, {useEffect, useState} from 'react';
import {Header} from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {UpButton} from "./upButton/UpButton";

const App = () => {
  const [isTop, setIsTop] = useState(false)
  const Fade = require('react-reveal/Fade')
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const position = window.scrollY > 400
      if (isTop !== position) {
        setIsTop(position)
      }
    })
  }, [isTop])

  return (
    <div className="main">
      <Header/>
      <Main/>
      <Fade left>
        <Skills/>
      </Fade>
      <Fade right>
        <Portfolio/>
      </Fade>
      <Contacts/>
      <Footer/>
      {isTop ? <UpButton/> : null}
    </div>
  )
}

export default App;
