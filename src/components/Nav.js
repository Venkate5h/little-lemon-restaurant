import navigationRoutes from "../routes/navigationRoutes";

const Nav = () => {
    return (
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
    )
}

export default Nav;
