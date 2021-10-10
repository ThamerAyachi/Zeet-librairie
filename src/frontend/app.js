import AbstractView from "../Packages/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
    }

    routerLink = "";

    async getHtml(){
        return `
            ${this.routerLink}
        `;
    }
}