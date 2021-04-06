import React, { Component } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Showcases from "./pages/Showcases/Showcases";

import './App.scss';

class App extends Component {
    componentDidMount() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            let vh = window.innerHeight * 0.01;
            // Then we set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    }
    render() {
        return (
            <React.Fragment>
                <section id="main">
                    <Sidebar />
                    <div id="content">
                        <Home />
                        <Showcases />
                        <About />
                        <Resume />
                    </div>
                    <div id="background">
                        <img src="/images/bridge_background.jpg" alt="" />
                    </div>
                </section>

                <div className="no-landscape">
                    Site non optimisé en mode paysage
                </div>
            </React.Fragment>
        )
    }
} 

export default App