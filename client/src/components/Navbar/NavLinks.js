import NavLink from './NavLink';
import Dropdown from './Dropdown';

const NavLinks = ( {onClick} ) => {
    return (
        <ul className="nav-list">
           <NavLink onClick={onClick} to="/faq">Частые вопросы</NavLink>
           <Dropdown onClick={onClick}>Партнеры</Dropdown>
           <NavLink onClick={onClick} to="/blog">Применение</NavLink>
        </ul>
    )
}

export default NavLinks
