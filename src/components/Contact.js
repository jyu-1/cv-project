import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <div>Contact Info</div>
                <form>
                    <input
                        type="text"
                        id="contact-name"
                        placeholder="Full Name"
                        onChange={this.props.handleInfoName}
                    />
                    <input
                        type="text"
                        id="contact-title"
                        placeholder="Title"
                        onChange={this.props.handleInfoTitle}
                    />
                    <input
                        type="tel"
                        id="contact-phone"
                        placeholder="Phone Number"
                        onChange={this.props.handleInfoPhone}
                    />
                    <input
                        type="email"
                        id="contact-email"
                        placeholder="Email"
                        onChange={this.props.handleInfoEmail}
                    />
                    <input
                        type="text"
                        id="contact-city"
                        placeholder="City"
                        onChange={this.props.handleInfoCity}
                    />
                </form>
            </div>
        );
    }
}

export default Contact;
