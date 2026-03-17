import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Header.scss';

function Header(props: any) {

    const [showNav, setShowNav] = useState<boolean>(false);

    const toggleSidenav = () => {
        setShowNav(!showNav);
    }

    return(
        <header>
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="/">NN</a>
                </div>
                <div className="nav-links">
                    <a href="#projects">Projetos</a>
                    <a href="#expertise">Habilidades</a>
                    <a href="#career">Experiência</a>
                    <a href="#contact">Contato</a>
                </div>
                <div className="nav-action">
                    <FontAwesomeIcon icon={props.isDarkMode ? faSun : faMoon} size="lg" onClick={props.toggleDarkMode}/>
                </div>
                <div className="menu-icon">
                    <MenuIcon onClick={toggleSidenav}/>
                </div>
            </div>
            <div className={`sidenav ${showNav ? 'active' : ''}`}>
                <div className="sidenav-header">
                    <div className="sidenav-logo">
                        <a href="/">NN</a>
                    </div>
                    <div className="close-icon">
                        <CloseIcon onClick={toggleSidenav}/>
                    </div>
                </div>
                <div className="sidenav-links">
                    <a href="#projects" onClick={toggleSidenav}>Projetos</a>
                    <a href="#expertise" onClick={toggleSidenav}>Habilidades</a>
                    <a href="#career" onClick={toggleSidenav}>Experiência</a>
                    <a href="#contact" onClick={toggleSidenav}>Contato</a>
                </div>
            </div>
        </header>
    );
}

export default Header;