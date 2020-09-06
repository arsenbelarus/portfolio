import React from "react";
import style from "./Main.module.css"

const Main = () =>
    (
        <div className={style.mainContainer}>
            <div className={style.main}>
                <div className={style.greeting}>
                    <h1>
                        Hello world
                    </h1>
                    <p>
                        My name is <strong>Arsen Vaskanian</strong> and I'm a front-end developer
                    </p>
                </div>
                <div className={style.image}>
                </div>
            </div>
        </div>
    )


export default Main