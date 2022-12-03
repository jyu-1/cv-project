import uniqid from "uniqid";

const data = {
    personalInfo: {
        name: "Apple Seed",
        title: "Software Engineer",
        phone: "1234567890",
        email: "apple@seed.com",
        city: "Los Angeles",
    },

    educationInfo: {
        module: [
            {
                university: "University of Southern California",
                city: "Los Angeles",
                degree: "Electrical Engineer",
                start: "6/16",
                end: "6/18",
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
                start: "6/18",
                end: "Current",
                description: "Full-stack Software Engineer",
                key: uniqid(),
            },
        ],
    },
};

export default data;
