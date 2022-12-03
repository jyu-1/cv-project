import uniqid from "uniqid";

const data = {
    personalInfo: {
        name: "BRUCE WAYNE",
        title: "Software Engineer",
        phone: "(626)123-4567",
        email: "jane@apple.com",
        city: "Los Angeles, CA",
    },

    educationInfo: {
        module: [
            {
                university: "University of Southern California",
                city: "Los Angeles, CA",
                degree: "Bachelor of Science: Electrical Engineer",
                start: "June 2016",
                end: "June 2018",
                key: uniqid(),
            },
        ],
    },

    experienceInfo: {
        module: [
            {
                company: "Engineering Company",
                position: "Software Engineer",
                city: "Los Angeles, CA",
                start: "June 2018",
                end: "Current",
                description:
                    "• Builds, designs, and maintains all websites and software applications\n• Regulates exposure to business stakeholders and executive management as well as other authorities\n• Designs, writes, and edits website content\n• Understands UI, cross-browser compatibility, and general web functions and standards",
                key: uniqid(),
            },
        ],
    },
};

export default data;
