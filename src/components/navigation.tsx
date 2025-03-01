import { useState } from 'react'
import Hamburger from 'hamburger-react'
import sun from '../assets/sunny-outline.svg';
import moon from '../assets/moon-outline.svg';

export default function Navigation() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode]= useState(true);

    function toggleTheme() {
        setDarkMode(prev => !prev);
        document.body.classList.toggle("dark-mode");
    }

    if (isOpen) {
        document.querySelector(".li-container")?.setAttribute("data-visible", "true");
    } else {
        document.querySelector(".li-container")?.setAttribute("data-visible", "false");
    }

    return (
        <nav>
            <span className="nav-logo">KENNETH</span>
            <Hamburger color={darkMode ? '#FFFFFF' : '#28282B' }toggled={isOpen} toggle={setOpen} rounded />
            <ul className='li-container' data-visible="false">
                <li><a href="#hero">HOME</a></li>
                <li><a href="#aboutSection">ABOUT</a></li>
                <li><a href="#projectsSection">PROJECTS</a></li>
                <li><a href="#footerSection">CONTACT</a></li>
                <button onClick={toggleTheme}><img src={darkMode ? moon : sun}/></button>
            </ul>
        </nav>
    )
}