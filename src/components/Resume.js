import React, { Component } from "react";

class Resume extends Component {
    render() {
        const { info, education, experience } = this.props;

        return (
            <div>
                <div className="info">
                    <div className="info-left">
                        <div className="name">{info.name}</div>
                        <div className="title">{info.title}</div>
                    </div>
                    <div className="info-right">
                        <div>{info.phone}</div>
                        <div>{info.email}</div>
                        <div>{info.city}</div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="resume-section-title">WORK EXPERIENCE</div>
                    {experience.module.map((e) => {
                        return (
                            <div className="resume-section" key={e.key}>
                                <div>
                                    <div className="stick-right top-line">
                                        {e.company}
                                    </div>
                                    <span className="top-line">
                                        {e.start} - {e.end}
                                    </span>
                                </div>
                                <div>
                                    <div className="stick-right bot-line">
                                        {e.position}
                                    </div>
                                    <div className="bot-line">{e.city}</div>
                                </div>
                                <div className="description-display">
                                    {e.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <hr />
                <div>
                    <div className="resume-section-title">EDUCATION</div>
                    {education.module.map((e) => {
                        return (
                            <div className="resume-section" key={e.key}>
                                <div>
                                    <div className="stick-right top-line">
                                        {e.university}
                                    </div>
                                    <span className="top-line">
                                        {e.start} - {e.end}
                                    </span>
                                </div>
                                <div>
                                    <div className="stick-right bot-line">
                                        {e.degree}
                                    </div>
                                    <div className="bot-line">{e.city}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Resume;
