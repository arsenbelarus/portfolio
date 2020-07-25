import React from "react";
import style from "./Contacts.module.css"

type HeaderPropsType = {

}

const Contacts = (props: HeaderPropsType) => {

    return (
    <div className={style.contactsContainer}>
        <form className={style.contactsForm}>
            <input type="text" placeholder={"Name"}/>
            <input type="text" placeholder={"E-mail"}/>
            <input type="phone" placeholder={"Phone"}/>
            <textarea name="" placeholder={"Your message"} rows={5}/>
            <button>Submit</button>
        </form>
    </div>


    )

}


export default Contacts