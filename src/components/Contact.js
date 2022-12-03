import React, { Component } from "react";

class Contact extends Component {
    render() {
        const { handleContact, data } = this.props;

        return (
            <div>
                <div>Contact Info</div>
                <form>
                    <input
                        type="text"
                        id="contact-name"
                        placeholder="Full Name"
                        value={data.name}
                        onChange={(event) => handleContact(event, "name")}
                    />
                    <input
                        type="text"
                        id="contact-title"
                        placeholder="Title"
                        value={data.title}
                        onChange={(event) => handleContact(event, "title")}
                    />
                    <input
                        type="tel"
                        id="contact-phone"
                        placeholder="Phone Number"
                        value={data.phone}
                        onChange={(event) => handleContact(event, "phone")}
                    />
                    <input
                        type="email"
                        id="contact-email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(event) => handleContact(event, "email")}
                    />
                    <input
                        type="text"
                        id="contact-city"
                        placeholder="City"
                        value={data.city}
                        onChange={(event) => handleContact(event, "city")}
                    />
                </form>
            </div>
        );
    }
}

export default Contact;
