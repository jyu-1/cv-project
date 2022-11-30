import React, { Component } from "react";
import uniqid from "uniqid";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personalInfo: {
                name: "Apple Seed",
                title: "Software Engineer",
                phone: "1234567890",
                email: "apple@seed.com",
                city: "Los Angeles",
            },

            educationInfo: {
                module: [
                    {
                        university: "University of Southern California",
                        city: "Los Angeles",
                        degree: "Electrical Engineer",
                        start: "6/16",
                        end: "6/18",
                        key: uniqid(),
                    },
                ],
            },

            experienceInfo: {
                module: [
                    {
                        position: "Software Engineer",
                        company: "Engineering Company",
                        city: "Los Angeles",
                        start: "6/18",
                        end: "Current",
                        description: "Full-stack Software Engineer",
                        key: uniqid(),
                    },
                ],
            },
        };
    }

    handleChange = (e) => {
        this.setState({
            personalInfo: {
                name: e.target.value,
                title: e.target.value,
                phone: e.target.value,
                email: e.target.value,
                city: e.target.value,
            },

            educationInfo: {
                module: [
                    {
                        university: e.target.value,
                        city: e.target.value,
                        degree: e.target.value,
                        start: e.target.value,
                        end: e.target.value,
                    },
                ],
            },

            experienceInfo: {
                module: [
                    {
                        position: e.target.value,
                        company: e.target.value,
                        city: e.target.value,
                        start: e.target.value,
                        end: e.target.value,
                        description: e.target.value,
                    },
                ],
            },
        });
    };

    render() {
        return (
            <div className="main">
                <div className="left">
                    <Contact />
                    <Education />
                    <Experience />
                </div>
                <div className="right">
                    <Resume
                        info={this.state.personalInfo}
                        education={this.state.educationInfo}
                        experience={this.state.experienceInfo}
                    />
                </div>
            </div>
        );
    }
}

export default Main;
