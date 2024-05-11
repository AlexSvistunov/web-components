customElements.define(
  "custom-comment",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
    <div class='comment-head'>
      <span>Name</span>
      <span>Date</span>
    </div>

    <p class='comment-text'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

    <div class='comment-buttons'>
      <button>Reply</button>
      <button>Delete</button>
    </div>

    <div class='comment-create'>
      <textarea name="" id=""></textarea>
      <button>Submit</button>
    </div>

    <div class="children">
      
    </div>
    `;

    this.shadowRoot.querySelector('textarea').value
    }

    // не нужно доходить до создания компонента

  }
);
