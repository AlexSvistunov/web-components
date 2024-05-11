class AlexCounter extends HTMLElement {
  connectedCallback() {
    this.setAttribute("count", this.getAttribute('start'));
    this.i = Number(this.getAttribute('count'))


    this.render();

  }

  render() {
   
    this.innerHTML = `
    <button>-</button>
    <div>${this.i}</div>
    <button>+</button>
  `;

    const btns = this.querySelectorAll("button");
    btns[0].addEventListener("click", () => {
      this.i = this.i - 1
      this.setAttribute('count', this.i)
      this.render()
     
    });

    btns[1].addEventListener("click", () => {
      this.i = this.i + 1
      this.setAttribute('count', this.i)
      this.render()
  
    });


  }


}

customElements.define("alex-counter", AlexCounter);
