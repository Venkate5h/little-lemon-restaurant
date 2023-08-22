import React from "react";
import logo from "../assets/Logo.svg";
import navigationRoutes from "../routes/navigationRoutes";
import '../css/Header.css';

const Header = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header;
