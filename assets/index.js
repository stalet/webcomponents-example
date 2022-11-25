
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
        div.setAttribute('id', `rick-morty-${id}`)
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
                image.setAttribute("class", "rounded-16 m-8 mt-16");
                image.src = json.image;
                div.textContent = '';
                div.appendChild(image);
            })
        }
    }

    customElements.define("rick-morty", RickMorty);
})();