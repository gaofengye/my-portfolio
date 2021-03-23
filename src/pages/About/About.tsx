import React, { FunctionComponent } from "react";

import './About.scss';

const About: FunctionComponent = () => {
    return (
        <div id="about" className="page">
            <div className="block">
                <img src="/images/coffee_work.jpg" alt="" />
                <div className="text">
                    Une chose que je recherche en tant que développeur front-end, c'est d'écrire la meilleure solution possible. Un code ne serait pas abouti si son implémentation n'était que sommaire.<br/><br/>
                    Coder est devenu ma vocation, mon objectif est d'apporter à chaque projet mon point de vue et expérience personnelle.
                </div>
            </div>
        </div>
    );
} 

export default About;