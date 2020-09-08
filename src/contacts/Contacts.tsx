import React, {ChangeEvent, useState} from "react";
import style from "./Contacts.module.css"
import axios from "axios"
import {BlockHeader} from "../common/blockHeader/BlockHeader";
import {Loader} from "../common/loader/Loader";

const Contacts = () => {

    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [resultMessage, setResultMessage] = useState("")
    const [messageStyle, setMessageStyle] = useState("")
    const [disabled, setDisabled] = useState(false)
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
    const handleError = (message: string) => {
        setResultMessage(message)
        setMessageStyle("darkred")
        setTimeout(() => {
            setResultMessage("")
        }, 3000)
    }
    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValues.message.trim() && inputValues.phone.trim() && inputValues.name.trim() && inputValues.email.trim()) {
            setDisabled(true)
            axios.post("https://arsen-mail-server.herokuapp.com/sendMessage", inputValues).then(() => {
                setResultMessage("Your message has been sent. I will contact you shortly.")
                setMessageStyle("green")
                setDisabled(false)
                setInputValues({...inputValues, name: "", message: "", email: "", phone: ""})
                setTimeout(() => {
                    setResultMessage("")
                }, 3000)
            }).catch((err) => {handleError(err.message)})
        } else {handleError("All fields are required")}
    }


    return (
        <div className={`${style.contactsContainer} "contacts"`}>
            <BlockHeader id={"contacts"} title={"Contacts"}/>
            <form className={style.contactsForm} onSubmit={submitHandler}>
                <input type="text" placeholder={"Name"} value={inputValues.name}
                       onChange={nameHandler} disabled={disabled}/>
                <input type="email" placeholder={"E-mail"} value={inputValues.email}
                       onChange={emailHandler} disabled={disabled}/>
                <input type="tel" placeholder={"Phone"} value={inputValues.phone}
                       onChange={phoneHandler} disabled={disabled}/>
                <textarea name="" placeholder={"Your message"} rows={5} value={inputValues.message}
                          onChange={messageHandler} disabled={disabled}/>
                {resultMessage && <div className={style.message} style={divStyle}>{resultMessage}</div>}
                {disabled ? <Loader/> : <button className={style.btn}>Submit</button> }
            </form>
        </div>
    )
}


export default Contacts