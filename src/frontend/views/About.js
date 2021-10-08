import AbstractView from "../../Packages/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("About Page")
    }

    async getHtml(){
        return `
            <h1> About Page </h1>
        `;
    }
}