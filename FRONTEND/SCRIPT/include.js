const pageType = document.body.dataset.layout;

// LOAD HTML COMPONENTS

const load = async (id, file) => {

    try {

        // FETCH FILE

        const response = await fetch(file);

        // CHECK IF FETCH FAILED

        if (!response.ok) {

            throw new Error(`Cannot fetch ${file}`);

        }

        // CONVERT TO HTML

        const data = await response.text();

        // TARGET ELEMENT

        const element = document.getElementById(id);

        // STOP IF ELEMENT DOESN'T EXIST

        if (!element) return;

        // INSERT HTML

        element.innerHTML = data;

        // CUSTOM EVENT

        document.dispatchEvent(
            new Event("headerLoaded")
        );

    }

    catch (error) {

        console.error(error);

    }

};

// LOAD COMPONENTS

async function head() {

    if (pageType === "public") {

        // LOAD HEADER

        await load(
            "header",
            "/COMPONENTS/header.html"
        );

    }

}

// START APP

head();