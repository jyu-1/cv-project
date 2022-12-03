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
                degree: "Electrical Engineer",
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
                    "Full-stack Software Engineer. Using React, Javascript, HTML and CSS for front-end; NodeJS for backend.",
                key: uniqid(),
            },
        ],
    },
};

export default data;
