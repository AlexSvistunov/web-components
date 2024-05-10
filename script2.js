class CommentComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
 
    </style>
    <div class="comment">
      <textarea>${this.getAttribute("text")}</textarea>
      <button class="reply-btn">Ответить</button>
      <div id="replies-container"></div>
    </div>`;
    this.replyButton = this.shadowRoot.querySelector(".reply-btn");
    this.repliesContainer = this.shadowRoot.getElementById("replies-container");
    this.replyButton.addEventListener("click", this.addReply.bind(this));
  }

  addReply() {
    const reply = document.createElement("div");
    reply.textContent = "Ответ на комментарий";
    this.repliesContainer.appendChild(reply);
  }
}

customElements.define("comment-component", CommentComponent);

// Создаем комментарии
const commentsContainer = document.getElementById("comments-container");

const comment1 = document.createElement("comment-component");
comment1.setAttribute("text", "Первый комментарий");
commentsContainer.appendChild(comment1);

const comment2 = document.createElement("comment-component");
comment2.setAttribute("text", "Второй комментарий");
commentsContainer.appendChild(comment2);
