import AbstractView from "../../Packages/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home Page")
    }

    async getHtml(){
        return `
            <h1> Home Page </h1>
        `;
    }
}