import React, { Component } from "react";

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { info, education, experience } = this.props;

        return (
            <div>
                <div className="info">
                    <div>{info.name}</div>
                    <div>{info.title}</div>
                    <div>{info.phone}</div>
                    <div>{info.email}</div>
                    <div>{info.city}</div>
                </div>
                <div className="edu">
                    {education.module.map((e) => {
                        return (
                            <div key={e.key}>
                                <div>{e.university}</div>
                                <div>{e.city}</div>
                                <div>{e.degree}</div>
                                <div>{e.start}</div>
                                <div>{e.end}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="exp">
                    {experience.module.map((e) => {
                        return (
                            <div key={e.key}>
                                <div>{e.position}</div>
                                <div>{e.company}</div>
                                <div>{e.city}</div>
                                <div>{e.start}</div>
                                <div>{e.end}</div>
                                <div>{e.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Resume;
