

customElements.define(
  "custom-inputs",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
      <style>
        div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 200px;
          margin-bottom: 20px;
        }
      </style>

      <div class="">
      <input type="text" placeholder="email">
      <input type="text" placeholder="password">
    </div>
    `;
    }
  }
);
