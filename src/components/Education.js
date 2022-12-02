import React, { Component } from "react";

class Education extends Component {
    render() {
        const {
            data,
            addEdu,
            deleteEdu,
            handleEduUniversity,
            handleEduCity,
            handleEduDegree,
            handleEduStart,
            handleEduEnd,
        } = this.props;

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
                                    handleEduUniversity(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="uni-city"
                                placeholder="City"
                                value={e.city}
                                onChange={(event) =>
                                    handleEduCity(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="uni-degree"
                                placeholder="Degree and Major"
                                value={e.degree}
                                onChange={(event) =>
                                    handleEduDegree(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="uni-start"
                                placeholder="Start Month and Year"
                                value={e.start}
                                onChange={(event) =>
                                    handleEduStart(event, e.key)
                                }
                            />
                            <input
                                type="text"
                                id="uni-end"
                                placeholder="Graduate Month and Year"
                                value={e.end}
                                onChange={(event) => handleEduEnd(event, e.key)}
                            />
                            <button
                                onClick={(event) => deleteEdu(event, e.key)}
                            >
                                Delete
                            </button>
                        </form>
                    );
                })}

                <button onClick={addEdu}>Add</button>
            </div>
        );
    }
}

export default Education;
