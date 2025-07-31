document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            const items = Array.from(xml.getElementsByTagName("item"));

            const categories = [...new Set(items.map(item => item.getElementsByTagName("category")[0].textContent))];

            const categoryContainer = document.getElementById("menu-categories");
            const menuContainer = document.getElementById("menu-items-container");

            categories.forEach((category, index) => {
                // Create category button
                const btn = document.createElement("button");
                btn.className = "category-btn";
                btn.textContent = capitalize(category);
                btn.onclick = () => filterMenu(category);
                categoryContainer.appendChild(btn);

                // Create menu section for each category
                const section = document.createElement("div");
                section.id = category;
                section.className = "menu-section";
                if (index === 0) section.classList.add("active");

                const heading = document.createElement("h2");
                heading.textContent = `${capitalize(category)} Cuisine`;
                section.appendChild(heading);

                const grid = document.createElement("div");
                grid.className = "menu-grid";

                items
                    .filter(item => item.getElementsByTagName("category")[0].textContent === category)
                    .forEach(item => {
                        const id = item.getAttribute("id");
                        const name = item.getElementsByTagName("name")[0].textContent;
                        const desc = item.getElementsByTagName("description")[0].textContent;
                        const img = item.getElementsByTagName("image")[0].textContent;
                        const price = item.getElementsByTagName("price")[0].textContent;

                        const itemDiv = document.createElement("div");
                        itemDiv.className = "menu-item";
                        itemDiv.setAttribute("data-id", id);
                        itemDiv.onclick = () => viewItemDetail(id);

                        itemDiv.innerHTML = `
                            <img src="${img}" alt="${name}">
                            <h3>${name}</h3>
                            <p>${desc}</p>
                            <span class="price">$${price}</span>
                        `;
                        grid.appendChild(itemDiv);
                    });

                section.appendChild(grid);
                menuContainer.appendChild(section);
            });
        });
});

// Helper functions
function viewItemDetail(id) {
    window.location.href = `item.html?id=${id}`;
}

function filterMenu(category) {
    document.querySelectorAll(".menu-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(category)?.classList.add("active");
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}