import React, { Component } from "react";

class Contact extends Component {
    render() {
        const {
            handleInfoName,
            handleInfoTitle,
            handleInfoPhone,
            handleInfoEmail,
            handleInfoCity,
            data,
        } = this.props;

        return (
            <div>
                <div>Contact Info</div>
                <form>
                    <input
                        type="text"
                        id="contact-name"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={handleInfoName}
                    />
                    <input
                        type="text"
                        id="contact-title"
                        placeholder="Title"
                        value={data.title}
                        onChange={handleInfoTitle}
                    />
                    <input
                        type="tel"
                        id="contact-phone"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={handleInfoPhone}
                    />
                    <input
                        type="email"
                        id="contact-email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleInfoEmail}
                    />
                    <input
                        type="text"
                        id="contact-city"
                        placeholder="City"
                        value={data.city}
                        onChange={handleInfoCity}
                    />
                </form>
            </div>
        );
    }
}

export default Contact;
