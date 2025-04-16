const projects = [
    {
        name: "Ruby on rails app (built specifically for this application!)",
        description: "<b>The challenge:</b> I'd never built a Rails application before, but since Rails is core to how you build at 37signals, I decided the best way to demonstrate my commitment and learning speed was to build something simple from scratch." +
            "<p><b>My approach:</b></p><ul>" +
            "<li>Followed the beginning of Rails' official tutorial closely to get the fundamentals.</li>" +
            "<li>Implemented my own extension: an Organization model (one-to-many relationship with users), where only admins can invite new users.</li>" +
            "<li>Deployed with Docker on DigitalOcean to experience a somewhat realistic workflow.</li></ul>" +
            "<p><b>Key learnings and reflections:</b></p><ul>" +
            "<li>Was surprised by how many things came out of the box with Rails, like authentication, fast performance, and built-in testing.</li>" +
            "<li>I have never experienced a framework leaning so much into naming conventions. Surprised me when references worked without imports due to naming conventions. </li>" +
            "<li>While I did not have experience while Rails or Ruby before, many of the concepts felt similar to other languages I have used. I am sure I will be able to pick it up quickly.</li></ul>" +
            "<p class='project-link'><b>Check it out: </b></p>" +
            "<a href='https://github.com/MrBisp/org_manager' target='_blank'>Github Repo</a> | " +
            "<a href='http://134.199.189.14' target='_blank'>Live Application</a>",
        embed: "<div class=\"project-image-carousel\" >" +
            "<img class='project-image active' src='img/rails-1.png' alt='Ruby on Rails app 1' data-index=\"0\" />" +
            "<img class='project-image' src='img/rails-2.png' alt='Ruby on Rails app 2' data-index=\"1\" />" +
            "<img class='project-image' src='img/rails-3.png' alt='Ruby on Rails app 3' data-index=\"2\" />" +
            "<img class='project-image' src='img/rails-4.png' alt='Ruby on Rails app 4' data-index=\"3\" />" +
            "<img class='project-image-carousel-dummy' src='img/rails-1.png'/>" +
            "</div>"
    },
    {
        name: "YouTube-like Recommendation Algorithm",
        description: "<b>The challenge:</b> Create a working recommendation algorithm (like YouTube's) from scratch to understand how the algorithm discovers content." +
            "<p><b>My approach:</b></p><ul>" +
            "<li>Built a simulation of user behavior to generate realistic engagement data.</li>" +
            "<li>Used Collaborative Filtering and Thompson Sampling (similar to methods used by real-world recommendation engines).</li>" +
            "<li>Created the backend in Python with FastAPI.</li>" +
            "<li>Created a clean frontend in Next.js for demonstration purposes.</li></ul>" +
            "<p><b>Key learnings:</b></p><ul>" +
            "<li>Understanding how the model works allowed me to think of creative ways to improve it.</li>" +
            "<li>A key challenge was to handle new videos and users. I found a simpler version than what YouTube uses, that works well for this project. Sometimes doing less is better.</li></ul>" +
            "<p class='project-link'><b>Watch the explanation:</b></p>" +
            "<a href='https://www.youtube.com/watch?v=3bJSC7WKSmU&start=27' target='_blank'>My YouTube Video Explaining the Project</a>",
        embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3bJSC7WKSmU?si=_92wG0UJMd_N-A1N&amp;start=27' " +
            "title='YouTube video player' frameborder='0' " +
            "allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' " +
            "referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
        name: "Project-Employee Matching",
        description: "<b>The challenge:</b> Customers wasted hours reading PDFs to match employees to projects. The existing method was slow, frustrating, and manual." +
            "<p><b>My approach:</b></p><ul>" +
            "<li>Shaped an AI-driven prototype using OpenAI's API to extract structured data from unstructured PDFs.</li>" +
            "<li>Built a basic Next.js prototype to validate feasibility and usability. Handed it over to the developers who built the final product.</li>" +
            "<li>Collaborated closely with designer and developer. I lead the technical direction, including designing the data flow.</li></ul>" +
            "<p><b>Key learnings and considerations:</b></p><ul>" +
            "<li>How to work with new AI models to create simple products that would have been impossible just a few years ago.</li>" +
            "<li>It was cool with the AI models, but I do not like the idea that the quality and reliability of the product is dependent on the model providers. Would have liked to host open-source models but it was not possible with the company's setup.</li></ul>" +
            "<p class='project-link'><b>Result:</b></p> Users loved the product. It eliminated hours of work with just a few clicks.",
        embed: "<div class=\"project-image-carousel\" >" +
            "<img class='project-image active' src='img/employee-match-2.png' alt='Project-Employee matching' data-index=\"0\" />" +
            "<img class='project-image' src='img/employee-match-1.png' alt='Project-Employee matching' data-index=\"1\" />" +
            "<img class='project-image' src='img/employee-match-3.png' alt='Project-Employee matching' data-index=\"2\" />" +
            "<img class='project-image' src='img/employee-match-4.png' alt='Project-Employee matching' data-index=\"3\" />" +
            "<img class='project-image-carousel-dummy' src='img/employee-match-1.png'/>" +
            "</div>"
    },
    {
        name: "Hungry Homies (Personal full-stack app)",
        description: "<b>The challenge:</b> I do not trust Google reviews. But I do trust my friends' reviews. I wanted to create a product that would allow me to find great places to eat/drink coffee near me." +
            "<p><b>My approach:</b></p><ul>" +
            "<li>Developed a simple, mobile-first application using Next.js and Supabase.</li>" +
            "<li>Focused on user experience. I wanted to make it as simple as possible for users to add places and reviews.</li>" +
            "<li>Developed the app in Next.js and database in Supabase. Worked quite well, but still not sure if I like Next.js or not.</li>" +
            "<li>Faced the \"cold start\" problem. Who wants to use a network driven app when your friends are not already using it?</li></ul>" +
            "<p><b>Key learnings:</b></p><ul>" +
            "<li>The number one critisism was that the map was boring. Led me down a rabbit hole of learning about map APIs which is much deeper than you would think.</li>" +
            "<li>Happy I did not spend weeks on potential features. Because by launching quickly I could gather that there was no real traction for the idea, so I could move on to other projects.</li>" +
            "<li>I learned a lot about the importance of network effects and how they can be a challenge to overcome.</li></ul>" +
            "<p class='project-link'><b>View the project:</b></p>" +
            "<a href='https://github.com/MrBisp/Hungry-Homies' target='_blank'>Github Repo</a>",
        embed: "<img class='project-image-full' src='img/hungry-homies.png' alt='Hungry Homies' />"
    }
];

// TODO: Add more awesome projects after joining 37signals ;)

export class Projects extends HTMLElement {
    connectedCallback() {
        let projectsHTML = '';

        projects.forEach(project => {
            projectsHTML += `
                <div class="project">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p> 
            `;
            if (project.embed) {
                projectsHTML += `
                    <div class="project-embed">
                        ${project.embed}
                    </div>
                `;
            }
            projectsHTML += `
            </div>
            `;
        });

        this.innerHTML = `
            <div class="projects-container">
                ${projectsHTML}
            </div>
        `;
    }
}