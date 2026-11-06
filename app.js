
/* =========================================
   1. PROFILE DATA
========================================= */

const profileData = {
    name: "Pervaiz Ahmed",

    role: "Software Engineer",

    introduction:
        "I am a Software Engineer interested in building responsive websites and practical software solutions.",

    about:
        "I have a background in Information Technology and experience in web development, Python programming, and software projects. I enjoy learning new technologies and solving real-world problems.",

    status: "Available for new opportunities",

    skills: [
        { name: "HTML", level: 9 },
        { name: "CSS", level: 9 },
        { name: "JavaScript", level: 7 },
        { name: "Python", level: 8 },
        { name: "React", level: 6 },
        { name: "Next.js", level: 6 },
        { name: "FastAPI", level: 6 },
        { name: "Git & GitHub", level: 7 },
        { name: "Pandas", level: 5 },
        { name: "NumPy", level: 5 }
    ],

    education: [
        {
            title: "Bachelor of Science in Information Technology",
            institution: "University of Sindh, Pakistan"
        },
        {
            title: "Certified Web Developer",
            institution: "Web Development"
        }
    ],

    experience: [
        {
            position: "Freelance Developer",
            company: "Fiverr and Upwork",
            duration: "3 Years",
            durationYears: 3,
            description:
                "Worked on Python, WordPress, and web development projects."
        },
        {
            position: "AI/ML & Software Engineering Intern",
            company: "Rivyn",
            duration: "12-Week Internship",
            durationYears: 0.25,
            description:
                "Working on a Python-based log intelligence system using FastAPI and related technologies."
        }
    ],

    projects: [
        {
            name: "FlyRank Search Intelligence",
            description:
                "An ML capstone project focused on identifying high-potential web pages for search ranking improvements."
        },
        {
            name: "ResumeIQ",
            description:
                "A resume analysis application using Python, FastAPI, and machine learning tools."
        },
        {
            name: "DropSniper",
            description:
                "A Web3 application project focused on exchange and blockchain-related functionality."
        },
        {
            name: "Dice Simulator",
            description:
                "A Python project demonstrating random number generation and programming fundamentals."
        }
    ],

    achievements: [
        "Completed Python programming fundamentals and object-oriented programming.",
        "Built practical projects using Python and web development technologies.",
        "Created and maintained public programming projects on GitHub.",
        "Participating in AI/ML and Software Engineering internship work."
    ],

    contact: {
        linkedin: "https://www.linkedin.com/in/pervaiz-ahmed-36611420a",
        github: "https://github.com/pervaiz123"
    }
};


/* =========================================
   2. PROFILE INITIALIZATION
========================================= */

function initializeProfile() {
    try {
        const {
            name,
            role,
            introduction,
            about,
            status
        } = profileData;

        const nameElement = document.querySelector("#profile-name");
        const introductionElement = document.querySelector(
            "#profile-introduction"
        );
        const aboutElement = document.querySelector("#about-description");
        const statusElement = document.querySelector("#profile-status");

        if (
            !nameElement ||
            !introductionElement ||
            !aboutElement ||
            !statusElement
        ) {
            throw new Error("A required profile element is missing.");
        }

        nameElement.textContent = name;

        introductionElement.textContent =
            `Hi, I am ${name}. I am a ${role}. ${introduction}`;

        aboutElement.textContent = about;

        statusElement.textContent = `Status: ${status}`;

        renderSkills(profileData.skills);
        renderEducation(profileData.education);
        renderExperience(profileData.experience);
        renderProjects(profileData.projects);
        renderAchievements(profileData.achievements);

        displaySkillScore();
        displayExperienceScore();

        setupSkillSearch();
        setupContactForm();

    } catch (error) {
        const errorDetails =
            error instanceof Error ? error.message : "Unknown error";

        showError(
            `Unable to load your profile. ${errorDetails}. Please refresh the page and try again.`
        );
    }
}


/* =========================================
   3. ERROR HANDLING
========================================= */

function showError(message) {
    const mainContent = document.querySelector(".main-content");

    if (!mainContent) {
        return;
    }

    let errorElement = document.querySelector("#profile-error");

    if (!errorElement) {
        errorElement = document.createElement("p");
        errorElement.id = "profile-error";
        errorElement.setAttribute("role", "alert");

        mainContent.prepend(errorElement);
    }

    errorElement.textContent = message;
}


/* =========================================
   4. RENDER SKILLS
========================================= */

function renderSkills(skills) {
    const skillsList = document.querySelector("#skills-list");
    const skillsMessage = document.querySelector("#skills-message");

    if (!skillsList || !skillsMessage) {
        throw new Error("Skills section was not found.");
    }

    skillsList.replaceChildren();

    if (skills.length === 0) {
        skillsMessage.textContent = "No matching skills found.";
        return;
    }

    const skillElements = skills.map((skill) => {
        const listItem = document.createElement("li");

        listItem.className = "skill-item";
        listItem.textContent = `${skill.name} — ${skill.level}/10`;

        return listItem;
    });

    skillsList.append(...skillElements);

    skillsMessage.textContent =
        `Showing ${skills.length} skill(s).`;
}


/* =========================================
   5. SKILL SEARCH AND FILTER
========================================= */

function filterSkills(skills, searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();

    return skills.filter((skill) =>
        skill.name.toLowerCase().includes(normalizedSearch)
    );
}


function setupSkillSearch() {
    const searchInput = document.querySelector("#skill-search");

    if (!searchInput) {
        throw new Error("Skill search input was not found.");
    }

    searchInput.addEventListener("input", handleSkillSearch);
}


function handleSkillSearch(event) {
    const searchText = event.target.value;

    const filteredSkills = filterSkills(
        profileData.skills,
        searchText
    );

    renderSkills(filteredSkills);

    const exactMatch = profileData.skills.find(
        (skill) =>
            skill.name.toLowerCase() === searchText.trim().toLowerCase()
    );

    const skillsMessage = document.querySelector("#skills-message");

    if (exactMatch && searchText.trim() !== "") {
        skillsMessage.textContent =
            `Found ${exactMatch.name}: skill level ${exactMatch.level}/10.`;
    }
}


/* =========================================
   6. CALCULATE SKILL SCORE
========================================= */

function calculateSkillScore(skills) {
    if (skills.length === 0) {
        return 0;
    }

    const totalScore = skills.reduce(
        (total, skill) => total + skill.level,
        0
    );

    return Math.round(totalScore / skills.length);
}


function displaySkillScore() {
    const scoreElement = document.querySelector("#skill-score");

    if (!scoreElement) {
        throw new Error("Skill score element was not found.");
    }

    const score = calculateSkillScore(profileData.skills);

    scoreElement.textContent =
        `Average Skill Score: ${score}/10`;
}


/* =========================================
   7. RENDER EDUCATION
========================================= */

function renderEducation(educationList) {
    const educationElement = document.querySelector("#education-list");

    if (!educationElement) {
        throw new Error("Education section was not found.");
    }

    educationElement.replaceChildren();

    const educationItems = educationList.map((education) => {
        const listItem = document.createElement("li");

        listItem.textContent =
            `${education.title} — ${education.institution}`;

        return listItem;
    });

    educationElement.append(...educationItems);
}


/* =========================================
   8. RENDER EXPERIENCE
========================================= */

function renderExperience(experienceList) {
    const experienceContainer = document.querySelector(
        "#experience-details"
    );

    if (!experienceContainer) {
        throw new Error("Experience section was not found.");
    }

    experienceContainer.replaceChildren();

    experienceList.forEach((experience) => {
        const experienceCard = document.createElement("article");

        experienceCard.className = "experience-item";

        const position = document.createElement("h3");
        position.textContent = experience.position;

        const company = document.createElement("p");
        company.textContent = experience.company;

        const duration = document.createElement("p");
        duration.textContent = `Duration: ${experience.duration}`;

        const description = document.createElement("p");
        description.textContent = experience.description;

        experienceCard.append(
            position,
            company,
            duration,
            description
        );

        experienceContainer.append(experienceCard);
    });
}


/* =========================================
   9. CALCULATE EXPERIENCE SCORE
========================================= */

function calculateExperienceScore(experienceList) {
    return experienceList.reduce(
        (total, experience) => total + experience.durationYears,
        0
    );
}


function getProfileMessage(experienceYears) {
    if (experienceYears >= 3) {
        return "Experienced developer with practical project experience.";
    }

    if (experienceYears > 0) {
        return "Developing professional experience through practical work.";
    }

    return "Currently building professional experience.";
}


function displayExperienceScore() {
    const scoreElement = document.querySelector("#experience-score");

    if (!scoreElement) {
        throw new Error("Experience score element was not found.");
    }

    const totalYears = calculateExperienceScore(
        profileData.experience
    );

    const profileMessage = getProfileMessage(totalYears);

    scoreElement.textContent =
        `Total Recorded Experience: ${totalYears.toFixed(2)} years. ${profileMessage}`;
}


/* =========================================
   10. RENDER PROJECTS
========================================= */

function renderProjects(projectList) {
    const projectsContainer = document.querySelector("#projects-list");

    if (!projectsContainer) {
        throw new Error("Projects section was not found.");
    }

    projectsContainer.replaceChildren();

    projectList.forEach(({ name, description }) => {
        const projectCard = document.createElement("article");

        projectCard.className = "project-item";

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = name;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = description;

        projectCard.append(projectTitle, projectDescription);

        projectsContainer.append(projectCard);
    });
}


/* =========================================
   11. RENDER ACHIEVEMENTS
========================================= */

function renderAchievements(achievements) {
    const achievementsList = document.querySelector(
        "#achievements-list"
    );

    if (!achievementsList) {
        throw new Error("Achievements section was not found.");
    }

    achievementsList.replaceChildren();

    const achievementItems = achievements.map((achievement) => {
        const listItem = document.createElement("li");

        listItem.textContent = achievement;

        return listItem;
    });

    achievementsList.append(...achievementItems);
}


/* =========================================
   12. CONTACT FORM
========================================= */

function setupContactForm() {
    const contactForm = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    if (!contactForm || !formMessage) {
        throw new Error("Contact form elements were not found.");
    }

    contactForm.addEventListener("submit", handleContactSubmit);

    contactForm.addEventListener("reset", () => {
        formMessage.textContent = "";
        delete formMessage.dataset.status;
    });
}


function handleContactSubmit(event) {
    event.preventDefault();

    const contactForm = event.currentTarget;
    const formMessage = document.querySelector("#form-message");

    try {
        const formData = new FormData(contactForm);

        const fullName = formData.get("fullName")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const experience = formData.get("experience");
        const message = formData.get("message")?.toString().trim();

        const interests = formData.getAll("interests");

        if (!fullName || !email || !experience || !message) {
            throw new Error("Please complete all required fields.");
        }

        if (!email.includes("@")) {
            throw new Error("Please enter a valid email address.");
        }

        const submission = {
            fullName,
            email,
            experience,
            interests: [...interests],
            message
        };

        const interestText =
            submission.interests.length > 0
                ? submission.interests.join(", ")
                : "No interests selected";

        formMessage.textContent =
            `Thank you, ${submission.fullName}! Your form has been validated successfully. Selected interests: ${interestText}.`;

        formMessage.dataset.status = "success";

    } catch (error) {
        formMessage.textContent =
            error instanceof Error
                ? error.message
                : "Something went wrong. Please try again.";

        formMessage.dataset.status = "error";
    }
}


/* =========================================
   13. START APPLICATION
========================================= */

initializeProfile();
