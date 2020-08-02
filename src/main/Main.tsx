import React from "react";
import style from "./Main.module.css"

type MainPropsType = {

}

const Main = (props: MainPropsType) => {

    return (
        <div className={style.mainContainer}>
            <a id="main"/>
            <div className={style.main}>
                <div className={style.greeting}>
                    <h2>
                        Hello world )))
                    </h2>
                    <p>
                        My name is <strong>Arsen Vaskanian</strong> and I'm a front-end developer
                    </p>
                </div>
                <div className={style.image}>

                </div>

            </div>
        </div>


    )

}


export default Main