const input = document.querySelector(".input");
const template = document.querySelector("template");
console.log(template.content);

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
    comment.innerHTML = `

    
    <div>
      <div class="comment-head">
        <span>Nickname</span>
        <span>May 11, 2024</span>
      </div>

      <p>Some text</p>

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
    document.querySelector(".comments").appendChild(comment);
  }
});

// <slot name='styles'></slot>
// <slot name='layout'</slot>
