import React from 'react';

function Nav() {
    return (
        <header>
                <h1>Eric Walker</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact-info">Contact</a>
                    </li>
                    <li>
                        <a href="./assets/resume.pdf" download>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav