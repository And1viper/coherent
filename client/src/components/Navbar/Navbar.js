import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
//import NavRequest from './NavRequest';
import Button from '../Button';

import Logo from '../../images/garyshlogo.svg';
import { GoThreeBars  } from 'react-icons/go';
import { ImCross  } from 'react-icons/im';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const onResizeSidebar = () =>{
        if(window.innerWidth > 700){
            setSidebar(false);
        }
    }

    window.addEventListener('resize', onResizeSidebar);

    return (
        <header>
            <div className={sidebar ? "overlay active" : "overlay"}></div>

            <Link className=" nav-logo" to="/"><img className="logo-img" src={Logo} alt="garysh-logo"/></Link>
            
            <div className="nav-mob">
                <p className="phone phone-mob">8 700 000-00-00</p>
                <Button buttonSize="btn-imgsize" onClick={showSidebar}><GoThreeBars/></Button>
            </div>
            
            <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <NavLinks onClick={showSidebar}/>
                
                <div className="nav-request">
                    <p className="phone">8 700 000-00-00</p>
                    <a href="#contact-form"><Button buttonStyle="btn-purple" onClick={showSidebar}>Заявка</Button></a>
                </div>

                <Button buttonStyle="btn-close" buttonSize="btn-medium" onClick={showSidebar}><ImCross/></Button>
            </div>

        </header>
    )
}

export default Navbar