customElements.define(
  "shower-deck",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      });

      const template = document.createElement("template");
      template.innerHTML = `
    <link rel="stylesheet" href="./index.css">
      <slot></slot>
    `;
      this.shadowRoot.appendChild(template.content);
      // document.body.appendChild(template.content.cloneNode(true))
    }
  }
);
