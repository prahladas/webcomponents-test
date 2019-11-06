// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

// Extend the LitElement base class
class MyElement extends LitElement {

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */

  static get properties() {
    return {
      message: { type: String },
      myBool: { type: Boolean },
      myArray: { type: Array },
      basePath: { type: String }

    };
  }

  static get styles() {
    // Write styles in standard CSS
    return css`
      img.demo {  opacity: 0.3;}
    .active,.demo:hover {  opacity: 1;}
    /* .image-list { margin: 100px; } */
    .light-box { margin: 50px; }
    .class1 {
      max-height:200px;
      transition:max-height 1s;
      overflow:hidden;
    }

    `;
  }

  constructor() {
    super();
    this.message = 'Hello world! From my-element';
    this.myBool === true;
    this.myArray = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg'];
    this.basepath = "assets";
  }
  render() {


    return html`

<div id="id1" class="class1">
          

  </div>

  
          <div class="image-list">
          <ul>${this.myArray.map(item => html`
          <img class="demo" id="${item}" src="${this.basepath}/${item}" @click=${this.clickHandler}" width="100" height="100" alt="" title="" />          
          `)}</ul>
          </div>
         

    `;
  }



  clickHandler(event) {


    let parentdiv = this.shadowRoot.getElementById('id1');

    parentdiv.style.maxHeight = "500px";
    parentdiv.style.maxWidth = "900px";

    let img = document.createElement("img");

    img.src = event.target.src;
    img.id = event.target.id;

    parentdiv.appendChild(img);
    parentdiv.firstChild.nextSibling.src = event.target.src;
    parentdiv.firstChild.nextSibling.id = event.target.id;
    parentdiv.firstChild.nextSibling.addEventListener("click", function() { 
      this.style.maxHeight="900px";
      

      }, false);
    if (parentdiv.hasChildNodes && parentdiv.childNodes.length > 2) {
      parentdiv.lastChild.remove();
    }


  }

  clickHandlerTwo(event) {
    console.log(event.target);
   



  }

  _displayLightbox(eventw) {
    console.log(eventw);

    // return html`


    // <img class="light-box-active" src="${this.basepath}/imae1.jpg"  width="500" height="500" alt="" title="" /> 
    //   </div>

    // `;


  }
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);
