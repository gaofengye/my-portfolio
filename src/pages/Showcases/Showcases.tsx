import React, { FunctionComponent } from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Showcases.scss';

SwiperCore.use([Navigation, Pagination]);

const Showcases: FunctionComponent = () => {
    return (
        <div id="showcases" className="page">
            <div className="block">
                <div className="slider">
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        pagination={{ 
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true
                        }}
                        slidesPerView='auto'
                        setWrapperSize={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 50
                            },
                            1024: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 30
                            }
                        }}
                        >
                        <SwiperSlide>
                            <img src="/images/showcases/tradescore.svg" alt="Tradescore" />
                            <div className="text">
                                <span className="name">Tradescore</span>
                                <span className="desc">
                                    Ajout de nouvelles features, ajustement d'affichage, développement de tests end to end
                                </span>
                                <a href="https://tradescore.eulerhermes.com/fr" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/tour_eiffel.png" alt="Guide de la tour Eiffel" />
                            <div className="text">
                                <span className="name">Guide de la tour Eiffel</span>
                                <span className="desc">
                                    Développement du site intégralement,
                                    Descriptif des étages, affichage d'une carte intéractive
                                </span>
                                <a href="https://guide.toureiffel.paris/fr" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/germitec.png" alt="Germitec" />
                            <div className="text">
                                <span className="name">Germitec</span>
                                <span className="desc">
                                    Développement de l'interface tablette embarqué, installation et maintenance du projet
                                </span>
                                <a href="https://germitec.com/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/cinesociety.jpg" alt="Cine Society" />
                            <div className="text">
                                <span className="name">Cine Society</span>
                                <span className="desc">
                                    Développement du site, implémentation du calendrier, Recherche de films
                                </span>
                                <a href="https://www.cinesociety.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/daiso.png" alt="Daiso" />
                            <div className="text">
                                <span className="name">Daiso</span>
                                <span className="desc">
                                    Développement de pages du site, affichage de produits, animation à la navigation
                                </span>
                                <a href="https://www.daisomall.co.kr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/toms_hardware.jpg" alt="Tom's Hardware" />
                            <div className="text">
                                <span className="name">Tom's Hardware</span>
                                <span className="desc">
                                    Développement de pages du site, ajout de nouvelles features
                                </span>
                                <a href="https://www.tomshardware.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/toms_guide.jpg" alt="Tom's Guide" />
                            <div className="text">
                                <span className="name">Tom's Guide</span>
                                <span className="desc">
                                    Développement de pages du site, ajout de nouvelles features
                                </span>
                                <a href="https://www.tomsguide.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/bouygues.png" alt="Bouygues Telecom" />
                            <div className="text">
                                <span className="name">Bouygues Telecom</span>
                                <span className="desc">
                                    Développement d'un outil en interne, javascript natif, liaison avec services Microsoft
                                </span>
                                <a href="https://www.bouyguestelecom.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/loreal.png" alt="L'Oréal" />
                            <div className="text">
                                <span className="name">L'Oréal</span>
                                <span className="desc">
                                    Développement de pages internes, usage de JQuery
                                </span>
                                <a href="https://www.loreal.com/fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/guerlain.jpg" alt="Guerlain" />
                            <div className="text">
                                <span className="name">Guerlain</span>
                                <span className="desc">
                                    Développement d'une page event en JQuery, animation se basant sur le scroll navigateur
                                </span>
                                <a href="https://www.guerlain.com/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/louis_vuitton.png" alt="Louis Vuitton" />
                            <div className="text">
                                <span className="name">Louis Vuitton</span>
                                <span className="desc">
                                    Développement de pages web avec Dojo
                                </span>
                                <a href="https://www.fondationlouisvuitton.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/showcases/edition_atlas.jpg" alt="Edition Atlas" />
                            <div className="text">
                                <span className="name">Edition atlas</span>
                                <span className="desc">
                                    Développement d'une application mobile en HTML5
                                </span>
                                <a href="https://www.editionsatlas.fr/" rel="noreferrer" target="_blank">Voir le site</a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button type="button" className="swiper-button-next"></button>
                    <button type="button" className="swiper-button-prev"></button>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    )
} 

export default Showcases;