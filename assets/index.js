
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

      const div = document.createElement("div");
      div.setAttribute('id', `rick-morty-${id}`)
      div.textContent = 'Loading...';
      const style = document.createElement("style");
      style.textContent = `
      img {
        border-radius: 50%;
      }
      `;

      shadow.append(style,div);


      fetch(`https://rickandmortyapi.com/api/character/${id}`)
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