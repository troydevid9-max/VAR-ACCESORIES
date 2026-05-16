const pageType = document.body.dataset.layout;

const load = async (id, file) => {

    try {

        const response = await fetch(file);

        if(!response.ok){

            throw new Error(`Cannot fetch ${file}`);

        }

        const data = await response.text();

        const element = document.getElementById(id);

        if(!element) return;

        element.innerHTML = data;

        // RUN AFTER HEADER LOADS
        initMobileMenu();

        document.dispatchEvent(
            new Event("headerLoaded")
        );

    }

    catch(error){

        console.error(error);

    }

};

async function head(){

    if(pageType === "public"){

        await load(
            "header",
            "/COMPONENTS/header.html"
        );

    }

}

head();





/* =========================
   MOBILE MENU FUNCTION
========================= */

function initMobileMenu(){

    const hamburger =
    document.querySelector(".hamburger");

    const mobileMenu =
    document.querySelector(".mobile-nav-links");

    if(!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");

        mobileMenu.classList.toggle(
            "show-mobile-menu"
        );

    });

}