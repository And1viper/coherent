import { Link } from "react-router-dom";

const FooterLink = ( {children, to} ) => {
    return (
        <li className="footer-list-item">
            <Link className="footer-link" to={to}>{children}</Link>
        </li>
    )
}

export default FooterLink
