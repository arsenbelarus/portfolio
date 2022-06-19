import style from "./BlockHeader.module.css";
import React from "react";

type BlockHeaderPropsType = {
    id: string
    title: string
}

export const BlockHeader = (props: BlockHeaderPropsType) => {
    return (
        <div className={style.header}>
            <h2>
                <a id={`${props.id}`}/>
                {props.title}
            </h2>
        </div>
    )
}

