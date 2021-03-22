import React, { FunctionComponent, useState } from "react";
import './Sidebar.scss';

export const Sidebar: FunctionComponent = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const goToHome = () => {
    }

    const scrollTo = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        setActivePageIndex(index);
        const content = document.querySelectorAll('.page')[index];
        if (content) content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    return (
        <aside id="sidebar">
            <button type="button" onClick={goToHome} className="logo">
                <span>GF</span>
                <span>YE</span>
            </button>

            <ul className="menu">
                <li>
                    <a href="#home" onClick={(e) => scrollTo(e, 0)} className={`menu-link${activePageIndex === 0 ? ' active' : ''}`}>
                        <i className="fas fa-home"></i>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#showcases" onClick={(e) => scrollTo(e, 1)} className={`menu-link${activePageIndex === 1 ? ' active' : ''}`}>
                        <i className="fas fa-book-open"></i>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => scrollTo(e, 2)} className={`menu-link${activePageIndex === 2 ? ' active' : ''}`}>
                        <i className="fas fa-user"></i>
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={(e) => scrollTo(e, 3)} className={`menu-link${activePageIndex === 3 ? ' active' : ''}`}>
                        <i className="fas fa-file"></i>
                        CV
                    </a>
                </li>
            </ul>

            <div className="description">
                Fait avec React 17<br/>
                en typescript et sass
            </div>
            
            <a href="mailto:ye.gaofeng@gmail.com" className="contact-link">ye.gaofeng@gmail.com</a>
        </aside>
    )
}