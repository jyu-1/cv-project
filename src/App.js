import "./styles/App.css";
import React, { Component } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <div className="left">
                    <Contact />
                    <Education />
                    <Experience />
                </div>
                <div className="right"></div>
            </div>
        );
    }
}

export default App;
