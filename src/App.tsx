import { Component } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Showcases from "./pages/Showcases/Showcases";

import './App.scss';

class App extends Component {
    render() {
        return (
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
        )
    }
} 

export default App