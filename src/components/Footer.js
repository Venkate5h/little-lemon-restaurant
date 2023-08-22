import React from "react";
import '../css/Footer.css';
import logo from "../assets/Logo.svg";
import navigationRoutes from "../routes/navigationRoutes";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    {
                        navigationRoutes.map(item => (
                            <li key={item.path}>
                                <a
                                    href={item.path}
                                    target="_self"
                                    referrerPolicy="no-referrer">
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <ul>
                <li>
                    Address: Little Lemon Restaurant, Earth, Universe
                </li>
                <li>
                    Phone Number: 080 12345678
                </li>
                <li>
                    Email: littlelemonrestaurant@gmail.com
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
