import { Link } from "react-router-dom";

const NavLink = ( {children, to, onClick} ) => {
    return (
        <li className="nav-list-item">
            <Link className="nav-link" to={to} onClick={onClick}>{children}</Link>
        </li>
    )
}

export default NavLink
