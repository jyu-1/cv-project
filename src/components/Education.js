import React, { Component } from "react";

class Education extends Component {
    render() {
        const { data, addEdu, handleEduUniversity } = this.props;

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
                                onChange={handleEduUniversity}
                            />
                            <input
                                type="text"
                                id="uni-city"
                                placeholder="City"
                            />
                            <input
                                type="text"
                                id="uni-degree"
                                placeholder="Degree and Major"
                            />
                            <input
                                type="text"
                                id="uni-start"
                                placeholder="Start Month and Year"
                            />
                            <input
                                type="text"
                                id="uni-end"
                                placeholder="Graduate Month and Year"
                            />
                        </form>
                    );
                })}

                <button onClick={addEdu}>Add</button>
            </div>
        );
    }
}

export default Education;
