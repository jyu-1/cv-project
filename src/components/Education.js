import React, { Component } from "react";

class Education extends Component {
    render() {
        const { data, handleEducation, addEducation, deleteEducation } =
            this.props;

        return (
            <div>
                <div>Education</div>
                {data.module.map((e) => {
                    return (
                        <form key={e.key}>
                            <input
                                type="text"
                                id="uni-name"
                                placeholder="University"
                                value={e.university}
                                onChange={(event) =>
                                    handleEducation(event, e.key, "university")
                                }
                            />
                            <input
                                type="text"
                                id="uni-city"
                                placeholder="City"
                                value={e.city}
                                onChange={(event) =>
                                    handleEducation(event, e.key, "city")
                                }
                            />
                            <input
                                type="text"
                                id="uni-degree"
                                placeholder="Degree and Major"
                                value={e.degree}
                                onChange={(event) =>
                                    handleEducation(event, e.key, "degree")
                                }
                            />
                            <input
                                type="text"
                                id="uni-start"
                                placeholder="Start Month and Year"
                                value={e.start}
                                onChange={(event) =>
                                    handleEducation(event, e.key, "start")
                                }
                            />
                            <input
                                type="text"
                                id="uni-end"
                                placeholder="Graduate Month and Year"
                                value={e.end}
                                onChange={(event) =>
                                    handleEducation(event, e.key, "end")
                                }
                            />
                            <button
                                onClick={(event) =>
                                    deleteEducation(event, e.key)
                                }
                            >
                                Delete
                            </button>
                        </form>
                    );
                })}

                <button onClick={addEducation}>Add</button>
            </div>
        );
    }
}

export default Education;
