import AbstractView from "../../Packages/AbstractView.js";

import Hello from "../components/Hello.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home Page")
        this.activateLink("")
    }

    Hello = new Hello();

    async getHtml(){
        return `

        <div class="home" >
            ${await this.Hello.getHtml()}
            <p> Welcome to Zeet librairie </p>
        </div>

        `;
    }
}