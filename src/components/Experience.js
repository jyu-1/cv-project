import React, { Component } from "react";

class Experience extends Component {
    render() {
        const { data, handleExperience, addExperience, deleteExperience } =
            this.props;

        return (
            <div>
                <div className="title-button">
                    <div className="input-title">Work Experience</div>
                    <button className="add-button" onClick={addExperience}>
                        Add
                    </button>
                </div>
                {data.module.map((e) => {
                    return (
                        <form key={e.key}>
                            <input
                                type="text"
                                id="exp-position"
                                placeholder="Position"
                                value={e.position}
                                onChange={(event) =>
                                    handleExperience(event, e.key, "position")
                                }
                            />
                            <input
                                type="text"
                                id="exp-company"
                                placeholder="Company"
                                value={e.company}
                                onChange={(event) =>
                                    handleExperience(event, e.key, "company")
                                }
                            />
                            <input
                                type="text"
                                id="exp-city"
                                placeholder="City"
                                value={e.city}
                                onChange={(event) =>
                                    handleExperience(event, e.key, "city")
                                }
                            />
                            <input
                                type="text"
                                id="exp-start"
                                placeholder="Start Date"
                                value={e.start}
                                onChange={(event) =>
                                    handleExperience(event, e.key, "start")
                                }
                            />
                            <input
                                type="text"
                                id="exp-end"
                                placeholder="End Date"
                                value={e.end}
                                onChange={(event) =>
                                    handleExperience(event, e.key, "end")
                                }
                            />
                            <input
                                text="textarea"
                                id="exp-description"
                                placeholder="Job Description"
                                value={e.description}
                                onChange={(event) =>
                                    handleExperience(
                                        event,
                                        e.key,
                                        "description"
                                    )
                                }
                            />
                            <button
                                className="delete-button"
                                onClick={(event) =>
                                    deleteExperience(event, e.key)
                                }
                            >
                                Delete
                            </button>
                        </form>
                    );
                })}
            </div>
        );
    }
}

export default Experience;
