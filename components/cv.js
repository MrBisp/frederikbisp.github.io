const cv = [
    {
        title: "Work experience",
        items: [
            {
                company: "Youandx",
                position: "Product & Onboarding Manager",
                startDate: "August 2024",
                endDate: "December 2024",
                description: "Youandx is a platform for keynote speakers. We built a customer-facing web application that provided companies with a centralized overview of their employees’ skill sets.",
                items: [
                    "Launched new features based on data insights from my PowerBI dashboards, driving a <b>45% increase in Monthly Active Users</b> over six months.",
                    "Worked with the CEO to define the product strategy and roadmap.",
                    "Shaped projects together with our tech lead and designer.",
                    "Helped with the onboarding of new customers, and was responsible for the customer success.",
                ]
            },
            {
                company: "Youandx",
                position: "Product Owner (part time while studying)",
                startDate: "June 2020",
                endDate: "August 2024",
                description: "Worked as the product owner in the scrum team, and was responsible for the product roadmap.",
                items: [
                    "<b>Implemented fixed time, variable scope.</b> It finally allowed us to launch on time, which made us all very satisfied.",
                    "Automated monthly supplier analytics emails, reducing monthly churn by 28% and establishing them as a major retention driver.",
                    "Optimized onboarding processes for speakers, <b>increasing signup conversion rates from 1.16% to 5.4%.</b>",
                    "Led all of the development and shaping. I also wrote user stories."
                ]
            }
        ]
    },
    {
        title: "Education",
        items: [
            {
                school: "Copenhagen Business School",
                degree: "Master",
                startDate: "2022",
                endDate: "2024",
                description: "Master in Business Administration and Information Systems",
                items: [
                    "Combines business strategy with digital and information technologies.",
                    "Got top grades in several classes focused on AI and machine learning in Python.",
                    "Learned about data network effects, and philosophized about the future of AI.",
                    "My master thesis was about analyzing strategies of Danish platform companies."
                ]
            },
            {
                school: "Copenhagen Business School",
                degree: "Bachelor",
                startDate: "2019",
                endDate: "2022",
                description: "Bachelor in Business Administration and Information Systems",
                items: [
                    "We learned the most basic programming concepts such as MVC, OOP, SQL, and more.",
                    "We made a few small full-stack projects - all of them using HTML, CSS and JavaScript. Express backend, and MongoDB (I would have picked an SQL db, but not allowed for some reason) as database.",
                    "Coded an app in React Native for a class, and got top grades for it.",
                    "Learned about microeconomics and how it relates to software development.",
                    "My bachelor thesis was about analyzing a Danish platform company, and suggesting strategies for growth.",
                    "Awarded geek of the class out of 120 students."
                ]
            }
        ]
    }
]

export class Cv extends HTMLElement {
    connectedCallback() {
        let cvHTML = '';

        cv.forEach(section => {
            cvHTML += `
                <div class="cv-section">
                    <h3>${section.title}</h3>
            `;
            section.items.forEach(detailItem => {
                cvHTML += `
                    <div class="item-detail">`;

                cvHTML += `<div class="left-container">`;
                if (detailItem.degree && detailItem.school) {
                    cvHTML += `<h4>${detailItem.degree} - ${detailItem.school}</h4>`;
                } else if (detailItem.position && detailItem.company) {
                    cvHTML += `<h4>${detailItem.position} - ${detailItem.company}</h4>`;
                }

                if (detailItem.startDate && detailItem.endDate) {
                    cvHTML += `<p class="dates">${detailItem.startDate} - ${detailItem.endDate}</p>`;
                }
                cvHTML += `</div>`;

                cvHTML += `<div class="right-container">`;

                if (detailItem.description) {
                    cvHTML += `<p>${detailItem.description}</p>`;
                }

                if (detailItem.items && detailItem.items.length > 0) {
                    cvHTML += '<ul>';
                    detailItem.items.forEach(point => {
                        cvHTML += `<li>${point}</li>`;
                    });
                    cvHTML += '</ul>';
                }

                cvHTML += `</div>`;

                cvHTML += `
                    </div>`;
            });
            cvHTML += `
                </div> 
            `;
        });

        this.innerHTML = cvHTML;
    }
}