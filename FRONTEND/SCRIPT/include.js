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

        document.dispatchEvent(new Event("headerLoaded"));

    }

    catch(error){

        console.error(error);

    }

};

async function head(){

    if(pageType === "public"){

        // ROOT PATHS

        await load(
            "header",
            "/FRONTEND/COMPONENTS/header.html"
        );

    }

}

head();