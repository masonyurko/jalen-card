import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const jalen = new URL('https://cdn.abcotvs.com/dip/images/12752170_jalen-hurts-top-things-img.jpg?w=1600', import.meta.url).href;

export class JalenCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      fname: { type: String},
      position: {
        type: String,
      },
      statsLabel: { type: String},
    }
  }

  static get styles() {
    return css`
      .wrapper {
        width: 400px;
        border: 2px solid #004c54;
        display: inline-flex;
      }

      .image {
        width: 400px;
      }

      .header {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
      }

      .header h3:hover {
        font-style: italic;
        font-size: 1.1em;
      }

      .header h3,
      .header h4 {
        transition: .3s ease-in-out all;
        margin: 16px;
        font-size: normal;
        color: #004c54
      }

      .buttons button:focus,
      buttons button:hover {
        background-color: darkgray;
      }

      buttons button:active {
        background-color: darkgray;
      }

      .buttons {
        display: block;
      }

      button {
        padding: 10px;
        font-size: 32px;
      }

      details {
        margin-left: 24px;
        padding: 10px;
        color: black;
      }

      .details summary {
        font-size: 20px;
        font-weight: bold;
      }

      @media only screen and (max-width: 1200px) {
        .wrapper {
          background-color: #004c54
          
        }
        .header h3,
        .header h4 {
          color: silver;
        }
        .details {
          color: silver;
        }
      }

      @media only screen and (max-width: 600px) {
        .wrapper {
          background-color: black;
        }
        .header h3,
        .header h4 {
          color: white;
        }
        .details {
          color: white;
        }
      }

      @media only screen and (max-width: 425px) {
        .wrapper {
          font-weight: normal;
        }
        .wrapper .header h3 {
          font-size: 12px;
        }
        .wrapper .header h4 {
          font-size: 10px !important;
        }
        details {
          display: none;
        }
      }
      `;
  }

  constructor() {
    super();
    this.name = "Jalen Hurts";
    this.position = "Quarterback";
    this.statsLabel = "Career Stats";
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container">
          <img class="image" src="${jalen}"/>
          <div class="header">
            <h3>${this.name}</h3>
            <h4>${this.position}</h4>
          </div>
          <details class="details">
            <summary>${this.statsLabel}</summary>
            <div>
              <slot></slot>
            </div>
          </details>
          </div>
      </div>
    `;
  }
}

customElements.define('jalen-card', JalenCard);