import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        id="exp-position"
                        placeholder="Position"
                    />
                    <input type="text" id="exp-company" placeholder="Company" />
                    <input type="text" id="exp-city" placeholder="City" />
                    <input
                        type="text"
                        id="exp-start"
                        placeholder="Start Date"
                    />
                    <input type="text" id="exp-end" placeholder="End Date" />
                    <input
                        text="textarea"
                        id="exp-description"
                        placeholder="Job Description"
                    />
                </form>
            </div>
        );
    }
}

export default Experience;
