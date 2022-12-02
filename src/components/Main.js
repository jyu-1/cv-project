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
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                name: e.target.value,
            },
        });
    };

    handleInfoTitle = (e) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                title: e.target.value,
            },
        });
    };

    handleInfoPhone = (e) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                phone: e.target.value,
            },
        });
    };

    handleInfoEmail = (e) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                email: e.target.value,
            },
        });
    };

    handleInfoCity = (e) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                city: e.target.value,
            },
        });
    };

    handleEduUniversity = (e) => {
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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

    deleteEdu = (e, key) => {
        e.preventDefault();
        this.setState({
            educationInfo: {
                module: this.state.educationInfo.module.filter(
                    (item) => item.key !== key
                ),
            },
        });
    };

    deleteExp = (e, key) => {
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
                        handleInfoName={this.handleInfoName}
                        handleInfoTitle={this.handleInfoTitle}
                        handleInfoPhone={this.handleInfoPhone}
                        handleInfoEmail={this.handleInfoEmail}
                        handleInfoCity={this.handleInfoCity}
                        data={this.state.personalInfo}
                    />
                    <Education
                        handleEduUniversity={this.handleEduUniversity}
                        handleEduCity={this.handleEduCity}
                        handleEduDegree={this.handleEduDegree}
                        handleEduStart={this.handleEduStart}
                        handleEduEnd={this.handleEduEnd}
                        addEdu={this.addEducation}
                        deleteEdu={this.deleteEdu}
                        data={this.state.educationInfo}
                    />
                    <Experience
                        handleExpPosition={this.handleExpPosition}
                        handleExpCompany={this.handleExpCompany}
                        handleExpCity={this.handleExpCity}
                        handleExpStart={this.handleExpStart}
                        handleExpEnd={this.handleExpEnd}
                        handleExpDescription={this.handleExpDescription}
                        addExp={this.addExperience}
                        deleteExp={this.deleteExp}
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
