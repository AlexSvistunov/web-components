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
  }
}


const element = document.createElement('my-comment')
comments.append(element)


customElements.define('my-comment', MyComment)