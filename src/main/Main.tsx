import React from "react";
import style from "./Main.module.css"
import {Button} from "../common/button/Button";
import FileSaver from 'file-saver';


const Main = () => {
  const saveFile = () => {
    FileSaver.saveAs(
      "https://arsenbelarus.github.io/portfolio/CV.pdf",
      "Arsen Vaskanian CV.pdf"
    )
  }
    return (
      <div className={style.mainContainer}>
        <div className={style.main}>
          <div className={style.greeting}>
            <h1>
              Hello world
            </h1>
            <p>
              My name is <strong>Arsen Vaskanian</strong> and I'm a Front-End developer
            </p>
            <Button name={"Download CV"} onClick={saveFile} onTouchEnd={saveFile} onTouchStart={saveFile}/>
          </div>
          <div className={style.image}>
          </div>
        </div>
      </div>
    )
  }


  export default Main