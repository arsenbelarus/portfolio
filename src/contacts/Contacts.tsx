import React, {ChangeEvent, useState} from "react";
import style from "./Contacts.module.css"
import axios from "axios"
import {BlockHeader} from "../common/blockHeader/BlockHeader";

const Contacts = () => {

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [resultMessage, setResultMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState("")
    const [disabled, setDisabled] = useState(true)
    const divStyle = {
        backgroundColor: messageStyle
    }

    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({
        ...inputValues,
        name: e.currentTarget.value
    })
    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({
        ...inputValues,
        email: e.currentTarget.value
    })
    const phoneHandler = (e: ChangeEvent<HTMLInputElement>) => setInputValues({
        ...inputValues,
        phone: e.currentTarget.value
    })
    const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setInputValues({
        ...inputValues,
        message: e.currentTarget.value
    })
    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDisabled(false)
        axios.post("https://arsen-mail-server.herokuapp.com/sendMessage", inputValues).then(() => {
            setResultMessage("Your message has been sent. I will contact you shortly.")
            setMessageStyle("green")
            setDisabled(true)
            setInputValues({...inputValues, name: "", message: "", email: "", phone: ""})
            setTimeout(() => {
                setResultMessage("")
            }, 3000)
        }).catch((err) => {
            setResultMessage(err.message)
            setMessageStyle("darkred")
            setTimeout(() => {
                setResultMessage("")
            }, 5000)
        })
    }


    return (
        <div className={`${style.contactsContainer} "contacts"`}>
            <BlockHeader id={"contacts"} title={"Contacts"}/>
            <form className={style.contactsForm} onSubmit={submitHandler}>
                <input type="text" placeholder={"Name"} value={inputValues.name} onChange={nameHandler}/>
                <input type="email" placeholder={"E-mail"} value={inputValues.email} onChange={emailHandler}/>
                <input type="tel" placeholder={"Phone"} value={inputValues.phone} onChange={phoneHandler}/>
                <textarea name="" placeholder={"Your message"} rows={5} value={inputValues.message}
                          onChange={messageHandler}/>
                {resultMessage && <div className={style.message} style={divStyle}>{resultMessage}</div>}
                {disabled && <button>Submit</button>}
            </form>
        </div>
    )
}


export default Contacts