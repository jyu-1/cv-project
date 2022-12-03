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

    handleContact = (e, item) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                [item]: e.target.value,
            },
        });
    };

    addEducation = (e) => {
        e.preventDefault();
        this.setState({
            educationInfo: {
                module: [
                    ...this.state.educationInfo.module,
                    {
                        university: "*University",
                        city: "*University City",
                        degree: "*Degree and Major",
                        start: "*Start Date",
                        end: "*Graduate Date",
                        key: uniqid(),
                    },
                ],
            },
        });
    };

    addExperience = (e) => {
        e.preventDefault();
        this.setState({
            experienceInfo: {
                module: [
                    ...this.state.experienceInfo.module,
                    {
                        position: "*Job Title",
                        company: "*Company",
                        city: "*Job City",
                        start: "*Job Start",
                        end: "*Job End",
                        description: "*Job Description",
                        key: uniqid(),
                    },
                ],
            },
        });
    };

    deleteEducation = (e, key) => {
        e.preventDefault();
        this.setState({
            educationInfo: {
                module: this.state.educationInfo.module.filter(
                    (item) => item.key !== key
                ),
            },
        });
    };

    deleteExperience = (e, key) => {
        e.preventDefault();
        this.setState({
            experienceInfo: {
                module: this.state.experienceInfo.module.filter(
                    (item) => item.key !== key
                ),
            },
        });
    };

    render() {
        return (
            <div className="main">
                <div className="left">
                    <Contact
                        handleContact={this.handleContact}
                        data={this.state.personalInfo}
                    />
                    <Education
                        handleEducation={this.handleEducation}
                        addEducation={this.addEducation}
                        deleteEducation={this.deleteEducation}
                        data={this.state.educationInfo}
                    />
                    <Experience
                        handleExperience={this.handleExperience}
                        addExperience={this.addExperience}
                        deleteExperience={this.deleteExperience}
                        data={this.state.experienceInfo}
                    />
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
