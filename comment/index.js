const input = document.querySelector(".input");
const template = document.querySelector('template')
console.log(template)

customElements.define(
  "custom-comment",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      


   
    }
  }
);

document.querySelector(".button").addEventListener("click", () => {
  if (input.value) {
    const comment = document.createElement("custom-comment");
    document.querySelector(".comments").appendChild(comment);
  }
});

// <slot name='styles'></slot>
// <slot name='layout'</slot>
