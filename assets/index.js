
class MyParagraph extends HTMLParagraphElement {
    constructor() {
      super();
    }
  }


customElements.define("my-paragraph", MyParagraph, { extends: "p" });

class RickMorty extends HTMLElement {
    constructor() {
      self = super();
  
      const shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");
      div.textContent = 'Loading...';
      const style = document.createElement("style");
      shadow.appendChild(style);
      shadow.appendChild(div);

      fetch('https://rickandmortyapi.com/api/character/2')
        .then(response => {
            if(response.ok){
                return response.json();
            }
            div.textContent = `Error ${response.status} ${response.statusText}`;
        })
        .then(json => {
            const image = document.createElement('img');
            image.src = json.image;
            
            
            div.textContent = '';
            div.appendChild(image);
            
        })


    }
  }

  customElements.define("rick-morty", RickMorty);