import React from "react";
import '../css/Footer.css';
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import Contact from "./Contact";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <Nav />
            <Contact />
        </footer>
    )
}

export default Footer;
