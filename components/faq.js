const faq = [
    {
        question: "What is your favorite 37signals product?",
        answer: "I have unfortunately not used any of the 37signals products, but I have spent a lot of time studying your products. I think that Hey is honestly so cool, because everybody uses email, but it sucks! But if I were to pick I just think the idea about once is awesome. I have been really into the idea of hosting things myself, and I think that once is such a great concept and a really low price!"
    },
    {
        question: "Mac or Windows?",
        answer: "Linux! Specifically I use Zorin, which is based on Ubuntu. It\'s really nice and runs great on my old laptop - much faster than Windows!"
    },
    {
        question: "What is your favorite programming language?",
        answer: "I have mostly built things for the web, so I have mostly used JavaScript. But I have lately been really into machine learning, so I have been using Python a lot. And actually also some C# since I have been working with Unity. But I have heard many good things about Rails, so I would love to learn that as well!"
    },
    {
        question: "How did you make this website?",
        answer: "The website is on Github, so you can see the code here: <a href='https://github.com/FrederikBisp/37signals-application' target='_blank'>https://github.com/FrederikBisp/37signals-application</a>. I have been focusing on making it as fast and simple as possible, so decided not to use any frameworks. It's simply HTML, CSS and JavaScript. I have made a few components to make it easier to read and write, but it just uses vanilla JS and HTML5. "
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