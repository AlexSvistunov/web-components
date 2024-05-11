customElements.define(
  "shower-slide",
  class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
      });

      const template = document.createElement("template");
      template.innerHTML = `
    <link rel="stylesheet" href="shower-slide.css">
      <slot></slot>
      <slot name='styles'></slot>
    `;
      this.shadowRoot.appendChild(template.content);

      const styles = this.shadowRoot.querySelector('slot[name="styles"]').assignedNodes()
      this.shadowRoot.appendChild(styles[0])
      // document.body.appendChild(template.content.cloneNode(true))
    }
  }
);
