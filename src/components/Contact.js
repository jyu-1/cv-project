import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Contact Info</div>
                <form>
                    <input
                        type="text"
                        id="contact-name"
                        placeholder="Full Name"
                    />
                    <input type="text" id="contact-title" placeholder="Title" />
                    <input
                        type="tel"
                        id="contact-phone"
                        placeholder="Phone Number"
                    />
                    <input
                        type="email"
                        id="contact-email"
                        placeholder="Email"
                    />
                    <input type="text" id="contact-city" placeholder="City" />
                </form>
            </div>
        );
    }
}

export default Contact;
