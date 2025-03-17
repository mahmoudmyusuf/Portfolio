document.addEventListener("DOMContentLoaded", function() {
    const loadProjects = document.getElementById('loadProjects');
    const portfolioContent = document.getElementById('portfolioContent');

    function loadPortfolioSection() {
        fetch('../index.html') // Go up one level to fetch index.html
            .then(response => response.text()) // Convert response to text
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, 'text/html'); // Parse HTML

                let portfolioSection = doc.querySelector('#portfolio'); // Get #portfolio section
                if (portfolioSection) {
                    portfolioContent.innerHTML = portfolioSection.innerHTML;
                } else {
                    portfolioContent.innerHTML = "<p>Portfolio section not found.</p>";
                }
            })
            .catch(error => console.error('Error loading portfolio section:', error));
    }

    // Automatically load portfolio section when page loads
    if (portfolioContent) {
        loadPortfolioSection();
    }

    // If "Projects" link is clicked, reload the portfolio section
    if (loadProjects) {
        loadProjects.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link navigation
            loadPortfolioSection(); // Load section again
        });
    }
});

console.log("script.js is loaded!");