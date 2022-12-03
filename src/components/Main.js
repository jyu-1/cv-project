import React, { Component } from "react";
import uniqid from "uniqid";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";
import data from "./DefaultData";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = data;
    }

    handleContact = (e, item) => {
        e.preventDefault();
        this.setState({
            personalInfo: {
                ...this.state.personalInfo,
                [item]:
                    item === "name"
                        ? e.target.value.toUpperCase()
                        : e.target.value,
            },
        });
    };

    handleEducation = (e, key, item) => {
        e.preventDefault();
        this.setState({
            educationInfo: {
                module: this.state.educationInfo.module.map((moduleItem) => {
                    if (moduleItem.key === key)
                        return { ...moduleItem, [item]: e.target.value };
                    else return moduleItem;
                }),
            },
        });
    };

    handleExperience = (e, key, item) => {
        e.preventDefault();
        this.setState({
            experienceInfo: {
                module: this.state.experienceInfo.module.map((moduleItem) => {
                    if (moduleItem.key === key)
                        return { ...moduleItem, [item]: e.target.value };
                    else return moduleItem;
                }),
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
                        university: "* University *",
                        city: "* University City *",
                        degree: "* Degree and Major *",
                        start: "* Start Date *",
                        end: "* Graduate Date *",
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
                        position: "* Job Title *",
                        company: "* Company *",
                        city: "* Job City *",
                        start: "* Job Start *",
                        end: "* Job End *",
                        description: "* Job Description *",
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
                    <hr />
                    <Experience
                        handleExperience={this.handleExperience}
                        addExperience={this.addExperience}
                        deleteExperience={this.deleteExperience}
                        data={this.state.experienceInfo}
                    />
                    <hr />
                    <Education
                        handleEducation={this.handleEducation}
                        addEducation={this.addEducation}
                        deleteEducation={this.deleteEducation}
                        data={this.state.educationInfo}
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
