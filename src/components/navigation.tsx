import { useState } from 'react'
import Hamburger from 'hamburger-react'

export default function Navigation() {
    const [isOpen, setOpen] = useState<boolean>(false)

    if (isOpen) {
        document.querySelector(".li-container")?.setAttribute("data-visible", "true");
    } else {
        document.querySelector(".li-container")?.setAttribute("data-visible", "false");
    }

    return (
        <nav>
            <span className="nav-logo">KENNETH</span>
            <Hamburger color='#FFFFFF' toggled={isOpen} toggle={setOpen} rounded />
            <ul className='li-container' data-visible="false">
                <li><a href="#hero">HOME</a></li>
                <li><a href="#aboutSection">ABOUT</a></li>
                <li><a href="#projectsSection">PROJECTS</a></li>
                <li><a href="#footerSection">CONTACT</a></li>
            </ul>
        </nav>
    )
}