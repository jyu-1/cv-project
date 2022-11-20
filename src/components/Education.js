import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" id="uni-name" placeholder="University" />
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
            </div>
        );
    }
}

export default Education;
