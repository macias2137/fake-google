import React from 'react'
import "../../styles/main.sass"
import logo from "../../assets/logo.svg"

const Main = () => {
    return (
    <main className="main">
        <div className="main__wrapper">
        <img src={logo} className="main__logo" alt="logo" />

        <input type="text" className="main__input"></input>
        </div>
    </main>)
}

export default Main