const reviews = [
    {
        name: "Hristijan Stevanoski",
        link: "https://www.linkedin.com/in/hristijan-stevanoski/",
        review: "[...] He is exceptionally pleasant and warm as a person: always patient, reliable, and always there to lend a hand and make the job easier for the entire team. <span class='review-highlight'>The standard that Frederik upholds in his work is incomprehensible, and yet he is doing it with such ease and a persistent smile on his face</span> - it's obvious that it is innate to him. All in all, it was so refreshing to work with Frederik. I would work with him anytime anywhere. The warmest of recommendations for any team!",
        image: "img/reviews/hristijan.jpg"
    },
    {
        name: "Jacob Schrøder",
        link: "https://www.linkedin.com/in/jacob-schroeder96/",
        review: "[...] I had the pleasure of working with Frederik, our Product Manager, for 5 years, and he consistently impressed me with his ability to turn data into valuable insights and actionable strategies. <span class='review-highlight'>His talent for bridging the gap between tech and business made him an essential part of our team.</span> [...]",
        image: "img/reviews/jacob.jpg"
    },
    {
        name: "Veton Hasani",
        link: "https://www.linkedin.com/in/veton-hasani-46a2a3129/",
        review: "[...] He has a deep understanding of both the technical and business sides of a project. Frederik's ability to prioritize tasks, define clear goals, and provide valuable insights ensured that our team stayed aligned and productive. <span class='review-highlight'>Frederik's communication skills and attention to detail made managing complex tasks easier.</span> His approachable nature and problem-solving mindset created a supportive and efficient work environment. [...]",
        image: "img/reviews/veton.jpg"
    }

]

export class Reviews extends HTMLElement {
    connectedCallback() {
        let reviewsHTML = '';

        reviews.forEach(review => {
            reviewsHTML += `
                <div class="review">
                    <div class="review-top">
                        <img src="${review.image}" alt="${review.name}">
                        <a href="${review.link}" class="reviewer-name" target="_blank">${review.name}</a>
                    </div>
                    <p class="review-text">${review.review}</p>
                </div>
            `;
        });

        this.innerHTML = `
            <div class="reviews-container">
                ${reviewsHTML}
            </div>
        `;
    }
}