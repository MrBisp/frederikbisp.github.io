const projects = [
    {
        name: "Ruby on rails app",
        description: "For the purpose of this application, I created a Ruby on Rails app (<a href='https://github.com/MrBisp/org_manager'>Github</a>, <a href='http://134.199.189.14' target='_blank'>app</a>), to show that I am able to quickly pick up new technologies. " +
            "It is a very simple app that mostly follows the basic tutorial from <a href='https://guides.rubyonrails.org/getting_started.html' target='_blank'>rubyonrails.org</a>. " +
            "But I find that in order to really understand a technology, you need to get a new idea and try to implement it. <br/><br/>" +
            "I decided to add an organization model, which has a one-to-many relationship with the users. " +
            "Each user can either be admin or a regular member of an organization. Only admins can add new users to the organization. " +
            "I ended up using Docker to deploy to Digital Ocean, and it went pretty smoothly. <br/><br/>" +
            "<b>Learnings:</b> I learned a lot about Ruby on Rails, and liked how good the performance was out of the box. " +
            "It took me some time to understand how everything works, and it was mostly because I was surprised by how many things happened automatically due to naming conventions. " +
            "I have a feeling that it is a framework that allows the developer to become really fast once they know the ins and outs of the framework. <br/><br/>" +
            "If I get the job I will be very excited to spend more time with Ruby on Rails!",
        embed: "<div class=\"project-image-carousel\" >" +
            "<img class='project-image active' src='img/rails-1.png' alt='Ruby on Rails app 1' data-index=\"0\" />" +
            "<img class='project-image' src='img/rails-2.png' alt='Ruby on Rails app 2' data-index=\"1\" />" +
            "<img class='project-image' src='img/rails-3.png' alt='Ruby on Rails app 3' data-index=\"2\" />" +
            "<img class='project-image' src='img/rails-4.png' alt='Ruby on Rails app 4' data-index=\"3\" />" +
            "<img class='project-image-carousel-dummy' src='img/rails-1.png'/>" +
            "</div>"
    },
    {
        name: "YouTube-like algorithm",
        description: "I am really excited about this project! I created a YouTube-like algorithm in Python. " +
            "I found this awesome method called <a href=\"https://en.wikipedia.org/wiki/Collaborative_filtering\" target=\"_blank\"> collaborative filtering</a>, " +
            "which is a nice way to find similar items based on user behavior. Basically, we represent each user and video as a vector like this: " +
            "user1 = [0.53, -0.61, ...]. And it is then possible to calculate the dot product of the users and the videos to find the best matches. " +
            "<br /> <br/>The model learns the vector embeddings by minimizing the difference between the predicted and the actual watch time. " +
            "To do this I needed to make a simulation of the user behaviour. So for example a user that is very interested in gaming is more likely to click on a gaming video. " +
            "And then depending on the user\'s interest and the video\'s quality, I simulated how much they watched. " +
            "<br/> <br/>All the interesting things happens in Python, but I also created a frontend using Next.js. " +
            "I am still not convinced that we need such heavy javascript frameworks, but I was able to find a lot of documentation for it, which is nice for a junior developer like me. " +
            "<br/> <br/>If you are interested, I made a YouTube video, where I explain a bit more about what I did, and some of the problems I ran into. " +
            "The most interesting part was how to handle new users and new videos, since you want to quickly be able to predict the vector embeddings, " +
            "and also handle a tradeoff between showing new videos and showing the once the model already knows are good. " +
            "<br/> <br/>I ended up using Thompson sampling which is a method to both determine video quality, but also to handle the explore / exploit tradeoff. " +
            "I also invented a technique to handle the cold start problem. Basically it sets the embeddings to a weighted average of the users that watched it, where " +
            "the weight is the watch time.",
        embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3bJSC7WKSmU?si=_92wG0UJMd_N-A1N&amp;start=27' " +
            "title='YouTube video player' frameborder='0' " +
            "allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' " +
            "referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
        name: "Project-Employee matching",
        description: "In my previous job, I experimented with using vector embeddings to match projects with employees. " +
            "<br/><br/><b>The challenge:</b> Our customers (companies) were bidding on projects, and used to spend hours reading through the project files " +
            "to identify the right employees for the project. We already had structured employee data including skill levels, but the projects were just unstructured pdf files. " +
            "You could ask the user to manually type 'we need a person with level 8 in web design and 7 in project management...' but this would take forever, and require " +
            "that the user would read through all of the project files (sometimes 100+ pages)." +
            "<br/><br/><b>The solution:</b> We used OpenAI\'s Assistant API to upload the project files to their vector storage. " +
            "We could then ask the LLM to extract the needed project roles including a description. So it would for example suggest 2 web designers, " +
            "2 web developers, 1 project manager and so on. For each of them, it would describe the type of skills and experiences that were required. " +
            "The user could edit these roles and descriptions.<br/><br/>We would then use OpenAI\'s embeddings API to transform this into a vector representation " +
            "and match the descriptions with the existing vector representations of the employees. We even highlighted relevant skills and experiences, " +
            "and generated a short description of why the employee was a good fit and presented alternatives. " +
            "<br/><br/><b>My role:</b> I was the product manager, and was responsible for shaping the solution together with a developer and designer. " +
            "I did not design the actual pixels, but worked along our designer to come up with how it should work. " +
            "Since the developer on the project had little experience with AI, I designed the data flow, and figured out which APIs we should use and how. " +
            "<b>I also coded a basic prototype in Next.js</b> to test that it was feasible to get it working." +
            "<br/><br/><b>Evaluation:</b> It is cool that we were able to build this. A few years ago it would have been very difficult to solve this problem " +
            "but with the new LLM technology, it only required some creative thinking. " +
            "I do not like the reliance on other companies APIs, since your ability to achieve better results and not having downtime is reliant on another company. " +
            "I would therefore be very interested in using a self-hosted LLM like LLama, but this was not possible with the companies infrastructure at the time.",
        embed: "<div class=\"project-image-carousel\" >" +
            "<img class='project-image active' src='img/employee-match-2.png' alt='Project-Employee matching' data-index=\"0\" />" +
            "<img class='project-image' src='img/employee-match-1.png' alt='Project-Employee matching' data-index=\"1\" />" +
            "<img class='project-image' src='img/employee-match-3.png' alt='Project-Employee matching' data-index=\"2\" />" +
            "<img class='project-image' src='img/employee-match-4.png' alt='Project-Employee matching' data-index=\"3\" />" +
            "<img class='project-image-carousel-dummy' src='img/employee-match-1.png'/>" +
            "</div>"
    },
    {
        name: "Hungry Homies",
        description: "<a href='https://github.com/MrBisp/Hungry-Homies' target='_blank'>Hungry Homies</a> is a hobby project I worked on in late 2024." +
            "<br/><br/><b>The challenge:</b> I never trust Google\'s reviews. But what I do trust is my friends. " +
            "So I wanted to create an app that you can pull out whenever you want to go to a café, restaurant or bar that shows your friends\' reviews. " +
            "<br/><br/><b>The solution:</b> I created a simple mobile-first website that allows you to add friends, add reviews and see your friends\' reviews. " +
            "It is built with Next.js and Supabase. I did use a boilerplate called <a href='https://shipfa.st' target='_blank'>Shipfast</a> to get started, " +
            "which is a really nice boilerplate for Next.js, that makes it super easy to handle authentication. <br/><br/>" +
            "I used Supabase for the database, which I ended up liking. It was easy and they have a really nice API. I also used supabase storage, for storing the images that users upload. " +
            "<br/><br/><b>The result:</b> My friends loved the idea, and made an account. But there is a serious cold start problem like any other platform. " +
            "Nobody wanted to post reviews because nobody else was. So even though I tried to get it started, the app never took off. " +
            "<br/><br/><b>Learnings:</b> It was not my first full-stack application, but nice to get some repetition. " +
            "I honestly learned more about the business side of things rather than coding. " +
            "Interestingly, the number one complaint I got was that the map itself looked to boring, " +
            "so I went down the rabbit hole of how to customize a map, which goes much deeper than you would think.",
        embed: "<img class='project-image-full' src='img/hungry-homies.png' alt='Hungry Homies' />"
    }
]
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