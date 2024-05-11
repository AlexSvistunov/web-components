const input = document.querySelector(".input");
const template = document.querySelector("template");


customElements.define(
  "custom-comment",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = `
        <slot name='layout'></slot>
      `


    }
  }
);




