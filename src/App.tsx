import React from 'react';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Freelance from "./freelance/Freelance";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Skills/>
        <Portfolio/>
        <Freelance/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
