const collections = [
    {
        category: "perfume",
        name: "Rose Gold Perfume",
        price: 120,
        rating: 5,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800"
    },
    {
        category: "perfume",
        name: "Luxury Scent",
        price: 95,
        rating: 4,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800"
    },
    {
        category: "clothes",
        name: "Classic Hoodie",
        price: 70,
        rating: 5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800"
    },
    {
        category: "watch",
        name: "Luxury Rolex",
        price: 1200,
        rating: 5,
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800"
    },
    {
        category: "jewelry",
        name: "Diamond Ring",
        price: 900,
        rating: 4,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800"
    }
];



/* =========================
   COLLECTIONS CONTAINER
========================= */

const collectionsContainer =
document.getElementById("collectionsContainer");



/* =========================
   RENDER COLLECTIONS
========================= */

function renderCollections(items) {

    if (!collectionsContainer) return;

    // NO RESULTS MESSAGE
    if (items.length === 0) {
        collectionsContainer.innerHTML = `
            <p class="no-results">
                No items found. Try a different search.
            </p>
        `;
        return;
    }

    // BUILD FULL STRING THEN ASSIGN ONCE
    collectionsContainer.innerHTML =
    items.map(item => `

        <div class="collection-card">

            <img
            src="${item.image}"
            class="collection-image"
            alt="${item.name}"
            >

            <div class="collection-category">
                ${item.category}
            </div>

            <div class="collection-name">
                ${item.name}
            </div>

            <div class="collection-bottom">

                <div class="collection-price">
                    $${item.price}
                </div>

                <div class="collection-rating">
                    ${"⭐".repeat(item.rating)}
                </div>

            </div>

        </div>

    `).join("");

}



/* =========================
   SHOW ALL COLLECTIONS
========================= */

renderCollections(collections);



/* =========================
   AFTER HEADER LOADS
========================= */

document.addEventListener("headerLoaded", () => {

    /* SEARCH INPUTS */

    const desktopSearch =
    document.querySelector("#search");

    const mobileSearch =
    document.querySelector("#mobile-search");



    /* SEARCH BUTTONS */

    const searchBtns =
    document.querySelectorAll(".search-btn");



    /* SEARCH FUNCTION */

    function searchCollections() {

        const desktopValue =
        desktopSearch ? desktopSearch.value : "";

        const mobileValue =
        mobileSearch ? mobileSearch.value : "";

        const searchValue =
        (desktopValue || mobileValue)
        .toLowerCase()
        .trim();

        // SHOW ALL
        if (searchValue === "") {
            renderCollections(collections);
            return;
        }

        // FILTER BY CATEGORY AND NAME
        const filteredCollections =
        collections.filter(item =>
            item.category.toLowerCase().includes(searchValue) ||
            item.name.toLowerCase().includes(searchValue)
        );

        renderCollections(filteredCollections);

    }



    /* BUTTON CLICK */

    searchBtns.forEach(btn => {
        btn.addEventListener("click", searchCollections);
    });



    /* ENTER KEY */

    [desktopSearch, mobileSearch]
    .forEach(input => {

        if (input) {

            input.addEventListener(
                "keypress",
                (e) => {
                    if (e.key === "Enter") {
                        searchCollections();
                    }
                }
            );

        }

    });

    // HAMBURGER IS HANDLED BY include.js — NOT HERE

});