import "./styles/App.css";
import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">CV Builder</div>
                <Main />
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
