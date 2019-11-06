// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import { LightboxStage } from './lightbox-stage';
import { LightboxThumbnails } from './lightbox-thumbnails';

// Extend the LitElement base class
class LightboxGallery extends LitElement {

  static get properties() {
    return {
      imagesBasepath: {
        type: String
      },
      images: {
        type: Array
      },
      textsTitle: {
        type: Array
      },
      /**
       * an array of description texts with the same index order as the images* arrays
       */
      textsDescription: {
        type: Array
      },
      activeIndex: {
        type: Number
      },

      _stageWidth: {
        type: Number
      },
      _activeIndex: {
        type: Number,
        value: 0,
        reflect: true
      },

    };
  }



  constructor() {
    super();
    this.imagesBasepath = "";
    this.images = [];
    this.textsTitle = [];
    this.textsDescription = [];
    this._activeIndex = 0;
    this._stageWidth = 302;
    this._isLightboxPopupHidden = true;

  }

  firstUpdated(changedProperties) {
    // changedProperties.forEach((oldValue, propName) => {
    //   console.log(`${propName} changed. oldValue: ${oldValue}`);
    // });

    this.addEventListener('my-event', this.handleMyEvent);
    this.addEventListener('click', this.clickHandler);

     
  } 

  clickHandler(event) {
    this._activeIndex = this._images.indexOf(event.target.id);
     event.bubbles;
    let myEvent = new CustomEvent('my-event', { 
      detail: { message: 'my-event happened.' },
      bubbles: true, 
      composed: true });
   this.dispatchEvent(myEvent);
   
    //this.dispatchEvent(event);
    console.log( this._activeIndex);
    return html`
    <lightbox-stage
    _activeIndex=${this._activeIndex}
    ></lightbox-stage>
    `;
  
  }
  render() {


    return html`

<h2>this is Image Gallery Test"</h2>
<lightbox-stage
_imagesBasepath=${this.imagesBasepath}
      _images='[ "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"]'
      _textsTitle='[ "image1 Title", "image2 Title", "image3 Title", "", "image5 Title", "image6 Title", "image7 Title", "image8 Title" ]'
      _textsDescription='[ "image1 description", "image2 description", "image3 description", "", "image5 description", "image6 description", "image7 description", "image8 description" ]'
      _activeIndex=${this._activeIndex}
      ></lightbox-stage>

      <lightbox-thumbnails
      _imagesBasepath=${this.imagesBasepath}
      _images='[ "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"]'
      _textsTitle='[ "image1 Title", "image2 Title", "image3 Title", "", "image5 Title", "image6 Title", "image7 Title", "image8 Title" ]'
      _textsDescription='[ "image1 description", "image2 description", "image3 description", "", "image5 description", "image6 description", "image7 description", "image8 description" ]'
      _activeIndex=${this._activeIndex}
    ></lightbox-thumbnails>


    `;
  }
  clickHandler(event) {
  }

}
// Register the new element with the browser.
customElements.define('lightbox-gallery', LightboxGallery);
