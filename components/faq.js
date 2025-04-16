const faq = [
    {
        question: "What is your favorite 37signals product?",
        answer: "From what I've seen in demos, I am really impressed by HEY! " +
            "To me, that is a prime example of thinking outside the box and creating a product that solves challenges from first principles. " +
            "But if I were to pick, I just think the idea about Once is awesome. I have been really into the idea of hosting things myself, " +
            "and I think that Once is such a great concept and a really low price!" 
    },
    {
        question: "Mac or Windows?",
        answer: "Linux! Specifically I use Zorin, which is based on Ubuntu. It\'s really nice and runs great on my old laptop - much faster than Windows! " +
            "I have also been quite annoyed my recent decisions made my Microsoft. For example, not making it possible to switch completely away from Edge."
    },
    {
        question: "What is your favorite programming language?",
        answer: "I have mostly built things for the web, and have mostly used JavaScript. " +
            "But I have lately been really into machine learning, so I have been using Python a lot. " +
            "But I enjoyed learning Ruby on Rails as well, and would love to use that in the future!"
    },
    {
        question: "How did you make this website?",
        answer: "The website is on <a href='https://github.com/MrBisp/frederikbisp.github.io' target='_blank'>Github</a>. " +
            "I have been focusing on making it as fast and simple as possible, so decided not to use any frameworks. " +
            "It's simply HTML, CSS and JavaScript. I have made a few components to make it easier to read and write, " +
            "but it just uses vanilla JS and HTML5. "
    },
    {
        question: "What is the best lesson you have learned from 37signals?",
        answer: "Fixed time, variable scope. As a product manager I really saw how scope creep happens. " +
            "My old boss used to keep asking for more and more features and then complained that we were not delivering on time. " +
            "It ended when I started being really strict about having a fixed time, and then only being flexible on the scope."
    }
]

export class Faq extends HTMLElement {
    connectedCallback() {
        let faqHTML = '';

        faq.forEach(item => {
            faqHTML += `
                <div class="faq-item">
                    <h3>${item.question}</h3>
                    <p>${item.answer}</p>
                </div>
            `;
        });

        this.innerHTML = `
            <div class="faq-container">
                ${faqHTML}
            </div>
        `;
    }
}