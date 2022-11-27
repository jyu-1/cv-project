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
                <div className="header">CV Builder</div>
                <div className="main">
                    <div className="left">
                        <Contact />
                        <Education />
                        <Experience />
                    </div>
                    <div className="right">Placeholder</div>
                </div>
                <div className="footer">
                    <span>
                        Copyright © 2022{" "}
                        <a
                            href="https://github.com/jyu-1/cv-project"
                            title="github link to this project"
                        >
                            jyu-1
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default App;
