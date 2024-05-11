const input = document.querySelector(".input");
const template = document.querySelector("template");
const button = document.querySelector(".button");
const comments = document.querySelector(".comments");

customElements.define(
  "custom-comment",
  class extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <slot name='layout'></slot>
        <slot name='styles'></slot>
      `;

  
    }

    connectedCallback() {
      this.querySelector('.reply').addEventListener('click', () => {
        this.querySelector('.add-comment').classList.toggle('hidden')
      })
    }
  }
);

button.addEventListener("click", () => {
  if (input.value) {
    const customComment = document.createElement("custom-comment");
    customComment.innerHTML = `
    <style slot="styles">

      custom-comment {
        display: block;
        max-width: 250px;
      }

      .comment-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .hidden {
        display: none;
      }
  </style> 

    <div slot="layout">
    <div class="comment-head">
      <span>Nickname</span>
      <span>May 11, 2024</span>
    </div>

    <p>${input.value}</p>

    <div class="comment-bottom">
      <button class='reply'>Reply</button>
      <button>Delete</button>
    </div>

    <div class='add-comment hidden'>
      <textarea></textarea>
      <button>Submit</button>

    </div>

    <div class='children'></div>

  </div>


    `;

    comments.appendChild(customComment);
  }
});
