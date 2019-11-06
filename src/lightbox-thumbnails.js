// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { LightboxStage } from './lightbox-stage';

// Extend the LitElement base class
export class LightboxThumbnails extends LitElement {

  static get properties() {
    return {
        _imagesBasepath: {
            type: String
        },
        _images: {
            type: Array
        },
        _textsTitle: {
            type: Array
        },
        /**
         * an array of description texts with the same index order as the images* arrays
         */
        _textsDescription: {
            type: Array
        },
        _activeIndex: {
            type: Number,
            value: 0,
            notify: true,
            reflect: true
        }, 
       };
}

async function() {
  const element = document.querySelector('#lightbox-stage').querySelector('_activeIndex')
  element.value = 1
  await element.requestUpdate()

  console.log(element.getAttribute('value')); 
};

static get styles() {
    // Write styles in standard CSS
    return css`
      img.demo {  opacity: 0.3;}
    .active,.demo:hover {  opacity: 1;}
    /* .image-list { margin: 100px; } */
    .light-box { margin: 50px; }
   

    #images-container {
      position: absolute;
      display: flex;
      height: 100%;
      margin-top: 500px;
      margin-left: 56px;


      transition: 1s;
      &.no-animation {
        transition: 0s;
      }

      .image-container {
        margin: auto 0 auto 56px;
        
       

        &:hover {
          cursor: pointer;
        }

        @include debug-background();
      }
    }

    `;
  }
  

  constructor() {
    super();
    this._imagesBasepath="";
        this._images=[];
        this._textsTitle=[];
        this._textsDescription=[];
        this._activeIndex=0;
    
  }

  firstUpdated(){

    this.addEventListener('mouseover', this.mouseOverHandler);
  
   


}

updated(){
  const myElement = document.querySelector('lightbox-stage');
    // myElement.addEventListener('click', (e) => {console.log(e)});

}

mouseOverHandler(){
  console.log("hello");
}

clickHandler(event) {
 
     
  this._activeIndex = this._images.indexOf(event.target.id);
   event.bubbles;
  let myEvent = new CustomEvent('my-event', { 
    detail: { message: 'my-event happened.' },
    bubbles: true, 
    composed: true });
    //myEvent.LightboxStage._activeIndex=this._activeIndex;
 this.dispatchEvent(myEvent);
  //this.dispatchEvent(event);
  console.log( this._activeIndex);
  this.updateStyle(this);
  // return html`
  // <lightbox-stage
  // _activeIndex=${this._activeIndex}
  // ></lightbox-stage>
  // `;

  

}


// attributeChangedCallback(name, oldValue, newValue) {
//   console.log('Custom square element attributes changed.');
//   this.updateStyle(this);
// }

updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);
  elem.parentNode.children[1]._activeIndex=this._activeIndex;
  // elem.parentNode.children[1]._altValue=this._textsDescription[this._activeIndex];
  // elem.parentNode.children[1]._titleValue=this._textsTitle[this._activeIndex];
  childNodes.forEach(childNode => {
    console.log(childNode.nodeName);
    if (childNode.nodeName === 'DIV') {
      console.log(childNode);
    }
    // if (childNode.nodeName === 'STYLE') {
    //   childNode.textContent = `
    //     div {
    //       width: ${elem.getAttribute('l')}px;
    //       height: ${elem.getAttribute('l')}px;
    //       background-color: ${elem.getAttribute('c')};
    //     }
    //   `;
    // }
  });
}


  render() {
   

    return html`


<div id="container">     
      <div id="images-stage">
        <div id="images-container">
         
        ${this._images.map(item => html`
        <div class="image-container">
          <img class="demo" id="${item}" src="${this._imagesBasepath}/${item}" @click="${this.clickHandler}" width="100" height="100" alt="" title="" />  
            </div>        
          `)}

       
        </div>
      </div>
     
    </div> 

    `;
  }





}
// Register the new element with the browser.
customElements.define('lightbox-thumbnails', LightboxThumbnails);
