const projects = [
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
            "<br/> <br/>I ended up using Thompson sampling which is a method to both determine video quality, but also to handle the explore / exploit tradeoff. ",
        embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3bJSC7WKSmU?si=SazRXW59ZTEP49e9' " +
            "title='YouTube video player' frameborder='0' " +
            "allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' " +
            "referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    },
    {
        name: "Project-Employee matching",
        description: "In my previous job, I experimented with using vector embeddings to match projects with employees. " +
            "<br/><br/><b>The challenge:</b> Our customers (companies) were bidding on projects, and used to spend hours reading through the project files " +
            "to identify the right employees for the project. We already had structured employee data including skill levels, but the projects were just unstructured pdf files. " +
            "This meant that we could not use a standard calculation to find the best matches. Instead we needed to find a way to extract the needed information from the pdf files. " +
            "And match this with the employees. " +
            "<br/><br/><b>The solution:</b> We used OpenAI\'s Assistant API to upload the project files to their vector storage. " +
            "We could then ask the LLM to extract the needed project roles including a description. So it would for example suggest 2 web designers, " +
            "2 web developers, 1 project manager and so on. For each of them, it would describe the type of skills and experiences that were required. " +
            "The user could edit these roles and descriptions.<br/><br/>We would then use OpenAI\'s embeddings API to transform this into a vector representation " +
            "and match the descriptions with the existing vector representations of the employees. We even highlighted relevant skills and experiences, " +
            "and generated a short description of why the employee was a good fit and presented alternatives. " +
            "<br/><br/><b>My role:</b> I was the product manager, and was responsible for coming up with the solution together with a developer and designer. " +
            "I did not design the actual pixels, but worked along our designer to come up with how it should work. " +
            "Since the developer on the project had little experience with AI, I designed the data flow, and figured out which APIs we should use and how. " +
            "I also coded a basic prototype in Next.js to test that it was feasible to get it working." +
            "<br/><br/><b>Evaluation:</b> It is cool that we were able to build this. A few years ago it would have been very difficult to solve this problem " +
            "but with the new LLM technology, it only required some creative thinking. " +
            "I do not like the reliance on other companies APIs, since your ability to achieve better results and not having downtime is reliant on another company. " +
            "I would therefore be very interested in using a self-hosted LLM like LLama, but this was not possible with the companies infrastructure at the time.",
        embed: "<div class=\"project-image-carousel\" >" +
            "<img class='project-image active' src='img/employee-match-2.png' alt='Project-Employee matching' data-index=\"0\" />" +
            "<img class='project-image' src='img/employee-match-1.png' alt='Project-Employee matching' data-index=\"1\" />" +
            "<img class='project-image' src='img/employee-match-3.png' alt='Project-Employee matching' data-index=\"2\" />" +
            "<img class='project-image' src='img/employee-match-4.png' alt='Project-Employee matching' data-index=\"3\" /></div>"
    },
    {
        name: "Hungry Homies",
        description: "<a href='https://github.com/MrBisp/Hungry-Homies' target='_blank'>Hungry Homies</a> is a hobby project I worked on in late 2024." +
            "<br/><br/><b>The challenge:</b> I never trust Google\'s reviews. But what I do trust is my friends. " +
            "So I wanted to create an app that you can pull out whenever you want to go to a café, restaurant or bar that shows your friends\' reviews. " +
            "<br/><br/><b>The solution:</b> I created a simple mobile-first website that allows you to add friends, add reviews and see your friends\' reviews. " +
            "It is built with Next.js and Supabase. I did use a boilerplate called <a href='https://shipfa.st' target='_blank'>Shipfast</a> to get started, " +
            "which is a really nice boilerplate for Next.js, that makes it super easy to handle authentication. " +
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