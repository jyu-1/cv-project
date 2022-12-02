import React, { Component } from "react";

class Experience extends Component {
    render() {
        const {
            data,
            addExp,
            deleteExp,
            handleExpPosition,
            handleExpCompany,
            handleExpCity,
            handleExpStart,
            handleExpEnd,
            handleExpDescription,
        } = this.props;

        return (
            <div>
                <div>Work Experience</div>
                {data.module.map((e) => {
                    return (
                        <form key={e.key}>
                            <input
                                type="text"
                                id="exp-position"
                                placeholder="Position"
                                value={e.position}
                                onChange={(event) =>
                                    handleExpPosition(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="exp-company"
                                placeholder="Company"
                                value={e.company}
                                onChange={(event) =>
                                    handleExpCompany(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="exp-city"
                                placeholder="City"
                                value={e.city}
                                onChange={(event) =>
                                    handleExpCity(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="exp-start"
                                placeholder="Start Date"
                                value={e.start}
                                onChange={(event) =>
                                    handleExpStart(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="exp-end"
                                placeholder="End Date"
                                value={e.end}
                                onChange={(event) => handleExpEnd(event, e.key)}
                            />
                            <input
                                text="textarea"
                                id="exp-description"
                                placeholder="Job Description"
                                value={e.description}
                                onChange={(event) =>
                                    handleExpDescription(event, e.key)
                                }
                            />
                            <button
                                onClick={(event) => deleteExp(event, e.key)}
                            >
                                Delete
                            </button>
                        </form>
                    );
                })}
                <button onClick={addExp}>Add</button>
            </div>
        );
    }
}

export default Experience;
