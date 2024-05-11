customElements.define('user-card', class extends HTMLElement {
  connectedCallback() {

      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <div>Имя:
          <slot name="username"></slot>
        </div>
        <div>Дата рождения:
          <slot name="birthday"></slot>
        </div>

        <textarea></textarea>
        <button>Submit</button>

        <div class='children'>123321</div>
      `;

      console.log(this.shadowRoot)
      
      // const userCard = document.createElement('user-card');
      // this.shadowRoot.querySelector('.children').appendChild(userCard);
    }
  
});