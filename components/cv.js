const cv = [
    {
        title: "Education",
        items: [
            {
                school: "Copenhagen Business School",
                degree: "Master in Business Administration and Information Systems",
                startDate: "2022",
                endDate: "2024",
                items: [
                    "Combines business strategy with digital and information technologies.",
                    "Got top grades in several classes focused on AI and machine learning in Python.",
                    "My master thesis was about analyzing strategies of Danish platform companies."
                ]
            },
            {
                school: "Copenhagen Business School",
                degree: "Bachelor in Business Administration and Information Systems",
                startDate: "2019",
                endDate: "2022",
                items: [
                    "We learned the most basic programming such as MVC, OOP, SQL, and more.",
                    "We made a few small full-stack projects - all of them using HTML, CSS and JavaScript.",
                    "Coded a app in React Native for a class, and got top grades for it.",
                    "My bachelor thesis was about analyzing a Danish platform company, and suggesting strategies for growth."
                ]
            }
        ]
    },
    {
        title: "Experience",
        items: [
            {
                company: "Youandx",
                position: "Product & Onboarding Manager",
                startDate: "August 2024",
                endDate: "December 2024",
                description: "Youandx is a platform for keynote speakers. We also developed a customer side, allowing customers to get an overview of their employees' skills.",
                items: [
                    "Launched new app features based on data insights from my PowerBI dashboards, driving a <b>45% increase in Monthly Active Users</b> over six months.",
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
                description: "Youandx is a platform for keynote speakers. We also developed a customer side, allowing customers to get an overview of their employees' skills.",
                items: [
                    "Implemented fixed time, variable scope. It finally allowed us to launch on time, which made my CEO very happy.",
                    "Automated monthly supplier analytics emails, reducing monthly churn by 28% and establishing them as a major retention driver.",
                    "Optimized onboarding processes for speakers, increasing signup conversion rates from 1.16% to 5.4%.",
                    "Led all of the development and shaping. I also wrote user stories."
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

                if (detailItem.degree && detailItem.school) {
                    cvHTML += `<h4>${detailItem.degree} - ${detailItem.school}</h4>`;
                } else if (detailItem.position && detailItem.company) {
                    cvHTML += `<h4>${detailItem.position} - ${detailItem.company}</h4>`;
                }

                if (detailItem.startDate && detailItem.endDate) {
                    cvHTML += `<p class="dates">${detailItem.startDate} - ${detailItem.endDate}</p>`;
                }

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