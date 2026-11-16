let coffeeList = document.getElementById("coffeeList");
let apiStatus = document.getElementById("apiStatus");
let hotBtn = document.getElementById("hotBtn");
let icedBtn = document.getElementById("icedBtn");

async function getCoffees(type) {
    apiStatus.textContent = "Loading...";
    coffeeList.innerHTML = "";

    try {
        const response = await fetch("https://api.sampleapis.com/coffee/" + type);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const coffees = await response.json();

        apiStatus.textContent = coffees.length + " " + type + " coffee recipes";

        coffeeList.innerHTML = coffees.map(coffee => `
            <div class="col-md-6 col-lg-4">
                <div class="product-card">
                    <div class="product-content">
                        <h3>${coffee.title}</h3>
                        <p>${coffee.description}</p>
                        <p><b>Ingredients:</b> ${coffee.ingredients}</p>
                    </div>
                </div>
            </div>
        `).join("");
    } catch (error) {
        apiStatus.textContent = "Sorry, could not load coffee recipes. Please try again later.";
        console.log(error);
    }
}

hotBtn.addEventListener("click", function () {
    hotBtn.classList.add("active");
    icedBtn.classList.remove("active");
    getCoffees("hot");
});

icedBtn.addEventListener("click", function () {
    icedBtn.classList.add("active");
    hotBtn.classList.remove("active");
    getCoffees("iced");
});

getCoffees("hot");
