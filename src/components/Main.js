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

    handleInfoName = (e) => {
        this.setState({
            personalInfo: {
                name: e.target.value,
            },
        });
    };

    handleInfoTitle = (e) => {
        this.setState({
            personalInfo: {
                title: e.target.value,
            },
        });
    };

    handleInfoPhone = (e) => {
        this.setState({
            personalInfo: {
                phone: e.target.value,
            },
        });
    };

    handleInfoEmail = (e) => {
        this.setState({
            personalInfo: {
                email: e.target.value,
            },
        });
    };

    handleInfoCity = (e) => {
        this.setState({
            personalInfo: {
                city: e.target.value,
            },
        });
    };

    handleEduUniversity = (e) => {
        this.setState({
            educationInfo: {
                module: [
                    {
                        university: e.target.value,
                    },
                ],
            },
        });
    };

    handleEduCity = (e) => {
        this.setState({
            educationInfo: {
                module: [
                    {
                        city: e.target.value,
                    },
                ],
            },
        });
    };

    handleEduDegree = (e) => {
        this.setState({
            educationInfo: {
                module: [
                    {
                        degree: e.target.value,
                    },
                ],
            },
        });
    };

    handleEduStart = (e) => {
        this.setState({
            educationInfo: {
                module: [
                    {
                        start: e.target.value,
                    },
                ],
            },
        });
    };

    handleEduEnd = (e) => {
        this.setState({
            educationInfo: {
                module: [
                    {
                        end: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpPosition = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
                        position: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpCompany = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
                        company: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpCity = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
                        city: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpStart = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
                        start: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpEnd = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
                        end: e.target.value,
                    },
                ],
            },
        });
    };

    handleExpDescription = (e) => {
        this.setState({
            experienceInfo: {
                module: [
                    {
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
                    <Contact
                        handleInfoName={this.handleInfoName}
                        handleInfoTitle={this.handleInfoTitle}
                        handleInfoPhone={this.handleInfoPhone}
                        handleInfoEmail={this.handleInfoEmail}
                        handleInfoCity={this.handleInfoCity}
                    />
                    <Education
                        handleEduUniversity={this.handleEduUniversity}
                        handleEduCity={this.handleEduCity}
                        handleEduDegree={this.handleEduDegree}
                        handleEduStart={this.handleEduStart}
                        handleEduEnd={this.handleEduEnd}
                    />
                    <Experience
                        handleExpPosition={this.handleExpPosition}
                        handleExpCompany={this.handleExpCompany}
                        handleExpCity={this.handleExpCity}
                        handleExpStart={this.handleExpStart}
                        handleExpEnd={this.handleExpEnd}
                        handleExpDescription={this.handleExpDescription}
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
