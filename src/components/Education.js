import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <div>
                <div>Education</div>
                <form>
                    <input
                        type="text"
                        id="uni-name"
                        placeholder="University"
                        onChange={this.props.handleEduUniversity}
                    />
                    <input type="text" id="uni-city" placeholder="City" />
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
                <button onClick={this.props.addEdu}>Add</button>
            </div>
        );
    }
}

export default Education;
