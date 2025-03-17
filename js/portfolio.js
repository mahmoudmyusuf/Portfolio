document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Portfolio script loaded!");

    const container = document.getElementById("portfolio-items");

    const projects = [
        {
            image: "/projects/img/Superstore-Dataset/picture1.png",
            title: "Sales Analysis | Superstore Dataset",
            description: "A comprehensive Sales Analysis Dashboard in Power BI to provide actionable insights into business performance for Superstore Dataset.",
            link: "/projects/Sales-Analysis-Superstore-Dataset.html",
            category: "first"
        },
        {
            image: "/projects/img/Manufacturing-Downtime/picture1.png",
            title: "Operation Analysis | Manufacturing Downtime",
            description: "An interactive Power BI report visualizing actionable insights into production efficiency and downtime causes.",
            link: "/projects/Manufacturing-Downtime.html",
            category: "first"
        },
        {
            image: "/projects/img/TOKYO-OLYMPICS/picture1.png",
            title: "Sports Analysis | TOKYO OLYMPICS",
            description: "An interactive Power BI report visualizing medal distribution by country, Medal Type, and Medal Combinations.",
            link: "/projects/TOKYO-OLYMPICS.html",
            category: "first"
        },
        {
            image: "/projects/img/Automation-Project/picture1.png",
            title: "Automation Project | Excel to Power BI",
            description: "Automating Excel reports with Power BI for real-time dashboards and improved decision-making.",
            link: "/projects/Automation-Project.html",
            category: "second"
        }
    ];

    if (container) {
        console.log(`📌 Found portfolio container! Loading ${projects.length} projects...`);
        projects.forEach((project) => {
            const item = document.createElement("div");
            item.className = `col-lg-4 col-md-6 mb-4 portfolio-item ${project.category}`;
            item.innerHTML = `
                <div class="position-relative overflow-hidden mb-2">
                    <img class="img-fluid rounded w-100" src="${project.image}" alt="${project.title}">
                    <div class="portfolio-title">${project.title}</div>
                    <div class="portfolio-btn bg-primary d-flex align-items-center justify-content-center"
                        data-modal='{"image": "${project.image}", "title": "${project.title}", "description": "${project.description}", "link": "${project.link}"}'>
                        <i class="fa fa-plus text-white" style="font-size: 60px;"></i>
                    </div>
                </div>
            `;
            container.appendChild(item);
        });
    } else {
        console.error("❌ Portfolio container not found!");
    }
});
