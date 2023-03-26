import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

//Partner List
import PartnersList from '../PartnersList';

//onClickOutside
let useClickOutside = (handler) =>{
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if(!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler);
        };
    });

    return domNode;
}

const Dropdown = ( { children, onClick }) => {
    const [open, setOpen] = useState(false);
    
    const toggleAll = () =>{
        onClick();
        setOpen(!open);
    }

    let domNode = useClickOutside(() => {
        setOpen(false);
    });

    return (
        <li ref={domNode} className="nav-list-item">
            <Link className="nav-link" to="#" onClick={() => setOpen(!open)}>{children}<span className={open ? "arrow active" : "arrow"}/></Link>

            <DropdownMenu dropdownClass={open ? "dropdown active" : "dropdown"} list={PartnersList} onClick={toggleAll}/>
        </li>
    )
}

const DropdownMenu = ( {list, onClick, dropdownClass} ) => {
    return(
        <div className={dropdownClass}>
            {list.map((item, i) => (
                <Link to={item.link} id={item.id} key={i} onClick={onClick} className="dropdown-item">{item.name}</Link>
            ))}
        </div>
    )
}

export default Dropdown
