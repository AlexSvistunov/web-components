const template = document.querySelector('#my-comment')
const input = document.querySelector('.input')
const submit = document.querySelector('.submit')
const comments = document.querySelector('.comments')


class MyComment extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('p').textContent = input.value
    
  }
}

submit.addEventListener('click', () => {
  const comment = document.createElement('my-comment')
  comments.appendChild(comment)
})





customElements.define('my-comment', MyComment)