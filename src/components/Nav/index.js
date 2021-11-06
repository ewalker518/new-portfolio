import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <header>
            <h1>Eric Walker</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
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