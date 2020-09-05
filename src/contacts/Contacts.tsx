import React, {ChangeEvent, useState} from "react";
import style from "./Contacts.module.css"
import axios from "axios"

type HeaderPropsType = {

}

const Contacts = (props: HeaderPropsType) => {

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({...inputValues, name: e.currentTarget.value})
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({...inputValues, email: e.currentTarget.value})
    const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({...inputValues, phone: e.currentTarget.value})
    const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setInputValues({...inputValues, message: e.currentTarget.value})

    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post("https://arsen-mail-server.herokuapp.com/sendMessage", inputValues).then(() => {
            alert("Your message has been sent")
            setInputValues({...inputValues, name: "", message: "", email: "", phone: ""})
        }).catch((err) => {
            alert(err)
        })
    }


    return (
    <div className={style.contactsContainer}>
        <h2>Contacts</h2>
       <a id="contacts"/>
        <form className={style.contactsForm} onSubmit={submitHandler}>
            <input type="text" placeholder={"Name"} value={inputValues.name} onChange={nameHandler}/>
            <input type="email" placeholder={"E-mail"} value={inputValues.email} onChange={emailHandler}/>
            <input type="tel" placeholder={"Phone"} value={inputValues.phone} onChange={phoneHandler}/>
            <textarea name="" placeholder={"Your message"} rows={5} value={inputValues.message} onChange={messageHandler}/>
            <button>Submit</button>
        </form>
    </div>


    )

}


export default Contacts