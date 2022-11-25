
(function() {
    class MyParagraph extends HTMLParagraphElement {
        constructor() {
        super();
        }
    }
    customElements.define("my-paragraph", MyParagraph, { extends: "p" });

    class RickMorty extends HTMLElement {
        constructor() {
        self = super();
    
        const id = this.getAttribute("data-id") || 1;
        const shadow = this.attachShadow({ mode: "open" });

        const fabric = document.createElement("link");
        fabric.href = "https://assets.finn.no/pkg/@fabric-ds/css/v1/fabric.min.css";
        fabric.rel = "stylesheet";
        fabric.type = "text/css";

        const div = document.createElement("div");
        div.setAttribute("class", "flex content-center bg-aqua-100 border-solid border border-aqua-700 border-aqua-700 shadow-2 rounded-16 mt-16 md:max-w-screen-sm");
        div.textContent = 'Loading...';
        const style = document.createElement("style");
        style.textContent = `
        `;

        shadow.append(fabric,style,div);


        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                div.textContent = `Error ${response.status} ${response.statusText}`;
            })
            .then(json => {
                const image = document.createElement('img');
                image.setAttribute("class", "rounded-l-16 mr-8");
                image.width = 150;
                image.height = 150;
                image.src = json.image;
                div.textContent = '';
                
                const desc = document.createElement('table');
                desc.setAttribute("class", "table-auto m-8 text-14 text-aqua-900")
                
                desc.innerHTML = `
                    <tr>
                        <td class="font-bold">Name:</td>
                        <td>${json.name}</td>
                    </tr>    
                    <tr>
                        <td class="font-bold">Status:</td>
                        <td>${json.status}</td>
                    </tr>    
                    <tr>
                        <td class="font-bold">Species:</td>
                        <td>${json.species}</td>
                    </tr>    
                    <tr>
                        <td class="font-bold">Gender:</td>
                        <td>${json.gender}</td>
                    </tr>    
                    <tr>
                        <td class="font-bold">Origin:</td>
                        <td>${json.origin.name}</td>
                    </tr>    
                    <tr>
                        <td class="font-bold">Location:</td>
                        <td>${json.location.name}</td>
                    </tr>    
                `;

                div.append(image,desc);
            })
        }
    }

    customElements.define("rick-morty", RickMorty);
})();