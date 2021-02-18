import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { theme } from '../../theme';
import Logo from '../logo/logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"
import Dropdown from "./DropDown";


const NavBarContainer = styled.div`
    background: ${theme.black};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    height: 80px;

    @media screen and (max-width: 960px) {
        max-height: 10vh;
        padding-top: 40px;
    }
`;

function MainNavBar() {
    //states
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    //functions
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
        <NavBarContainer>
            <Link to="/" style={{textDecoration: "none"}}>
                <Logo />
            </Link>
            <div className="menu-icon" onClick={ handleClick } >
                {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <NavItem>
                    <Link to="/" className="nav-links"  onClick={closeMobileMenu}>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                </NavItem>
                <NavItem
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link 
                        to="/services" 
                        className="nav-links" 
                        onClick={closeMobileMenu}
                    >
                        Services<FontAwesomeIcon icon={faAngleDown} style={{marginLeft: "10px"}}/>
                    </Link>
                    {dropdown && <Dropdown />}
                </NavItem>
                <NavItem>
                    <Link to="/biobay" className="nav-links" onClick={closeMobileMenu}>BioBey</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                </NavItem>
            </ul>
        </NavBarContainer>
        </>
    )
}

export default MainNavBar;