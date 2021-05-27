class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = /* HTML */
      'Copyrigth &copy; 2021 Oviedo Pimentel Diego Emiliano';
  }
}
customElements.define("mi-footer", MiFooter);
