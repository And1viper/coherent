import FooterLink from "./FooterLink";
import Button from "../Button";

import Logo from "../../images/garyshgraylogo.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <a className="footer-logo"href="/"><img className="logo-img" src={Logo} alt="garysh-logo"/></a>
                <div className="footer-menu">
                    <ul className="footer-list">
                        <FooterLink to="/">Продукция</FooterLink>
                        <FooterLink to="/">Применение</FooterLink>
                        <FooterLink to="/">Гарантия</FooterLink>
                    </ul>
                    <ul className="footer-list">
                        <FooterLink to="/">Партнеры</FooterLink>
                        <FooterLink to="/">О компании</FooterLink>
                        <FooterLink to="/">Блог</FooterLink>
                    </ul>
                    <ul className="footer-list">
                        <FooterLink to="/">Стоматология</FooterLink>
                        <FooterLink to="/">Бижютерия</FooterLink>
                        <FooterLink to="/">Обработка</FooterLink>
                    </ul>
                </div>
                <div className="footer-request">
                    <a href="#contact-form"><Button buttonStyle="btn-purple">Заявка</Button></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
