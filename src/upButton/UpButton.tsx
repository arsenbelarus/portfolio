import React from "react";
import styles from "./UpButton.module.css"

export const UpButton = () => {
    return (
        <>
            <a href="#main">
                <div className={styles.upButton}></div>
            </a>
        </>
    )
}