import styleString from "./style.scss?inline";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { logoBase64 } from "./logoBase64";
import { appTitle } from "./appTitleSvg";
import { moonIcon, sunIcon } from "./icons";

interface NavLink {
  name: string;
  url: string;
  active?: boolean;
}

@customElement("ug-navigation")
export class Navigation extends LitElement {
  static styles = unsafeCSS(styleString);

  @state()
  private theme: string =
    document.documentElement.getAttribute("data-color-mode") || "light";

  @state()
  private language: string = "nl";

  @property({ type: Array })
  links: NavLink[] = [];

  switchTheme() {
    const currentTheme =
      document.documentElement.getAttribute("data-color-mode");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-color-mode", newTheme);
    this.theme = newTheme;
  }

  switchLanguage() {
    const newLanguage = this.language === "nl" ? "en" : "nl";
    this.language = newLanguage;
    // Additional logic to update the app's language
  }

  constructor() {
    super();
    const linksAttr = this.getAttribute("data-links");
    if (linksAttr) {
      this.links = JSON.parse(linksAttr);
    }
  }

  render() {
    return html`
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid" style="height:60px">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img
                src="${logoBase64}"
                class="me-2 mb-1"
                alt="UGent Application Icon"
              />
              ${appTitle}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              style="height:100%"
              id="navbarNavAltMarkup"
            >
              <div
                class="navbar-nav"
                d-flex
                align-items-center
                style="height:100%"
              >
                ${this.links.map(
                  (link) => html`
                    <a
                      class="nav-link ${link.active ? "active" : ""} d-flex
                align-items-center"
                      href="${link.url}"
                      >${link.name}</a
                    >
                  `
                )}
              </div>
              <div class="ms-auto d-flex align-items-center">
                <a
                  class="nav-link ms-3"
                  href="#"
                  @click="${this.switchLanguage}"
                  aria-label="Switch language"
                >
                  ${this.language === "nl" ? "EN" : "NL"}
                </a>
                <button
                  class="btn theme-btn mb-1"
                  @click="${this.switchTheme}"
                  aria-label="Toggle theme"
                >
                  ${this.theme === "light" ? moonIcon : sunIcon}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ug-navigation": Navigation;
  }
}
