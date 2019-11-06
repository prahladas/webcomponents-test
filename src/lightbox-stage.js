// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { LightboxThumbnails } from './lightbox-thumbnails';

// Extend the LitElement base class
export class LightboxStage extends LitElement {

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
        _stageWidth: {
            type: Number
        },
        imageId: {
            type: String
        },
        
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

    #images-container {
      position: absolute;
      display: flex;
      height: 100%;
      margin-left: 55px;

      transition: 1s;
      &.no-animation {
        transition: 0s;
      }

      .image-container {
        margin: 50px 0 auto 0;

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
        this._stageWidth=302;
        this.imageId="stageImage";
       
    
  }

  firstUpdated(changedProperties) {
    // changedProperties.forEach((oldValue, propName) => {
    //   console.log(`${propName} changed. oldValue: ${oldValue}`);
    // });
    const imagearea = this.shadowRoot.getElementById(this.imageId);
    imagearea.focus();
    this.addEventListener('my-event', this.handleMyEvent);
    this.addEventListener('click', this.clickHandler);

    // let myElement = document.querySelector('lightbox-thumbnails');
    // myElement.addEventListener('event', (e) => {console.log(e)});
  } 
  clickHandler(event) {
    // this._activeIndex = this._images.indexOf(event.target.id);
     console.log("stage clicked");
  }

  handleMyEvent(event) {
    console.log('Origin: ', event.composedPath()[0]);
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      });
  }

  connectedCallback() {
    super.connectedCallback();
    // RenderStatus.afterNextRender(this, () => {
    //   console.log(this.shadowRoot.querySelector('#' + this.img[0].id));  
    // });
  }

  render() {
   

    return html`


<div id="container">     
      <div id="images-stage">
        <div id="images-container">
         
        <!-- <ul>${this._images.map(item => html` -->
        <!-- <div class="image-container" on-tap="_handleImageTap"> -->
          <!-- <img class="demo" id="${item}" src="${this._imagesBasepath}/${item}" @click=${this.clickHandler}" width="500" height="500" alt="" title="" />   -->
            <!-- </div>         -->
          <!-- `)}</ul> -->
          

          <img  id="${this.imageId}" src="${this._imagesBasepath}/${this._images[this._activeIndex]}" height="500" alt="${this._textsDescription[this._activeIndex]}" title="${this._textsTitle[this._activeIndex]}" />  
       
        </div>
      </div>
     
    </div> 

    `;
  }


}
// Register the new element with the browser.
customElements.define('lightbox-stage', LightboxStage);
