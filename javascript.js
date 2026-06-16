// Replace with your JSON file URL (GitHub Raw or Google Drive)
const JSON_URL = "https://raw.githubusercontent.com/gokulan006/MedSnap/refs/heads/main/articles.json";
//const JSON_URL = "https://raw.githubusercontent.com/gokulan006/Medical/main/articles.json";

async function fetchArticles() {
    try {
        const response = await fetch(JSON_URL);
        const articles = await response.json();
        const container = document.getElementById('articles-container');

        articles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';

            articleCard.innerHTML = `
                <h2>${article.title}</h2>
                <p class="summary">${article.summary}</p>
                <div class="meta">
                    <span>Published: ${article.publish_date}</span>
                </div>
            `;
            container.appendChild(articleCard);
        });
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchArticles();

