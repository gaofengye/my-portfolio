import React, { FunctionComponent, useEffect, useRef } from "react";
import './Home.scss';

const Home: FunctionComponent = () => {
    const typedTextRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const dom = typedTextRef.current;
        if (dom) {
            const textDOM = dom.querySelector('.text');
            const textCursor = dom.querySelector('.cursor');
            if (textDOM && textCursor) {
                const textToType = dom.getAttribute('data-text') || '';
                const typeWriter = (index: number) => {
                    setTimeout(() => {
                        if (index > textToType.length + 1) {  
                            textCursor.classList.add('animate');
                            return;
                        }
                        textDOM.textContent = textToType?.substring(0, index);
                        typeWriter(index + 1);
                    }, 200);
                }

                typeWriter(0);
            }
        }
    }, [])

    return (
        <div id="home" className="page">
            <div className="name">Gao-Feng YE</div>
            <div className="typed-text" ref={typedTextRef} data-text="Développeur Front-end">
                <span className="text"></span>
                <span className="cursor">|</span>
            </div>
        </div>
    );
} 

export default Home;