import React, { FunctionComponent } from "react";

import './Resume.scss';

const Resume: FunctionComponent = () => {
    return (
        <div id="resume" className="page">
            <div className="block">
                <div className="wrapper">
                    <div className="column">
                        <h3>Expériences professionnelles</h3>
                        <ul className="experience">
                            <li>
                                <h4>Lead dev Front-End</h4>
                                <div className="company">TKT</div>
                                <div className="date">2019-2021</div>
                                <div className="desc">Dirigeant une équipe de développeurs juniors et confirmés, mon rôle était de faire avancer l'équipe sur des projets divers aux technologies web récentes</div>
                            </li>
                            <li>
                                <h4>Consultant web Front-End</h4>
                                <div className="company">Fidésio</div>
                                <div className="date">2016-2018</div>
                                <div className="desc">En mission de 3 mois chez TF1 (VanillaJS) et 9 mois à la FDJ (Angular, React), j'étais envoyé en tant que développeur Front End pour apporter mon support technique au projets locaux</div>
                            </li>
                            <li>
                                <h4>Développeur Front-End</h4>
                                <div className="company">Asiance</div>
                                <div className="date">2015-2016</div>
                                <div className="desc">Développeur dans une agence internationale avec des projets interactifs relevant le challenge technique</div>
                            </li>
                            <li>
                                <h4>Développeur Front-End</h4>
                                <div className="company">Forbiz Korea</div>
                                <div className="date">2014-2015</div>
                                <div className="desc">Développeur Front-End dans une agence coréenne, mon rôle était d'apporter mon expérience occidentale aux développeurs locaux et participer à des projets coréens</div>
                            </li>
                            <li>
                                <h4>Développeur Front-End</h4>
                                <div className="company">Valtech</div>
                                <div className="date">2011-2013</div>
                                <div className="desc">Développeur Front-End à temps plein sur des projets pour client à grands comptes</div>
                            </li>
                            <li>
                                <h4>Développeur Front-End</h4>
                                <div className="company">Alten</div>
                                <div className="date">2010-2011</div>
                                <div className="desc">En mission chez des clients de Télécom ou d'actualités technologique, j'étais en charge de développer les parties Front de chaque projet client</div>
                            </li>
                        </ul>
                    </div>

                    <div className="column">
                        <h3>Formation</h3>
                        <ul className="education">
                            <li>
                                <h4>Shanghai Jiao Tong University</h4>
                                <div className="location">Shanghai, Chine</div>
                                <div className="date">2009-2010</div>
                                <div className="desc">
                                    Une des meilleures universités classés en Chine.
                                    Cours enseignés: Technologie d’extraction d’information Internet, Applications informatique, cours intensif de chinois.
                                </div>
                            </li>
                            <li>
                                <h4>ENSEEIHT</h4>
                                <div className="location">Toulouse, France</div>
                                <div className="date">2007-2009</div>
                                <div className="desc">
                                    Ecole d’ingénieur spécialisé dans l’électrotechnique, l’électronique, l’informatique l’hydraulique et les télécommunications.
                                    Classement l’Étudiant: 16ème en 2020.
                                    Cours enseignés: Langage de programmation (C, Java), Base de données, Architecture réseau.
                                </div>
                            </li>
                        </ul>

                        <h3>Compétences techniques</h3>
                        <ul>
                            <li>
                                <h4>Language de programmation:</h4>
                                <div className="desc">Javascript, Typescript Angular, React, JQuery, HTML5, CSS3, Sass. Connaissances en Php, Java, C#</div>
                            </li>
                            <li>
                                <h4>CMS:</h4>
                                <div className="desc">Drupal, Sitepoint, Sharepoint</div>
                            </li>
                        </ul>

                        <h3>Langues</h3>
                        <ul>
                            <li>
                                Français (langue maternelle)
                            </li>
                            <li>
                                Anglais (Bon niveau)
                            </li>
                            <li>
                                Chinois (Niveau intermédiaire)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Resume;