import React, { FunctionComponent, useState } from "react";
import './Sidebar.scss';

export const Sidebar: FunctionComponent = () => {
    const [activePageIndex, setActivePageIndex] = useState(0);

    const goToHome = () => {
        window.location.href = "/";
    }

    const scrollTo = (index: number) => {
        setActivePageIndex(index);
        const content = document.querySelectorAll('.page')[index];
        if (content) content.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    const handleMenuClick = (e: React.MouseEvent, index: number) => {
        if (e) e.preventDefault();
        scrollTo(index);
    }

    return (
        <aside id="sidebar">
            <button type="button" onClick={goToHome} className="logo">
                <span>GF</span>
                <span>YE</span>
            </button>

            <ul className="menu">
                <li>
                    <a href="#home" onClick={(e) => handleMenuClick(e, 0)} className={`menu-link${activePageIndex === 0 ? ' active' : ''}`}>
                        <i className="fas fa-home"></i>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#showcases" onClick={(e) => handleMenuClick(e, 1)} className={`menu-link${activePageIndex === 1 ? ' active' : ''}`}>
                        <i className="fas fa-book-open"></i>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => handleMenuClick(e, 2)} className={`menu-link${activePageIndex === 2 ? ' active' : ''}`}>
                        <i className="fas fa-user"></i>
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={(e) => handleMenuClick(e, 3)} className={`menu-link${activePageIndex === 3 ? ' active' : ''}`}>
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