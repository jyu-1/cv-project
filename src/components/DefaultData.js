import uniqid from "uniqid";

const data = {
    personalInfo: {
        name: "Jane Apple",
        title: "Software Engineer",
        phone: "(626)123-4567",
        email: "jane@apple.com",
        city: "Los Angeles",
    },

    educationInfo: {
        module: [
            {
                university: "University of Southern California",
                city: "Los Angeles",
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
                position: "Software Engineer",
                company: "Engineering Company",
                city: "Los Angeles",
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
