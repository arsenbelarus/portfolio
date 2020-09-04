import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {UpButton} from "./upButton/UpButton";

function App() {
  return (
    <div>
        <a id="main"/>
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
        <UpButton/>
    </div>
  );
}

export default App;
