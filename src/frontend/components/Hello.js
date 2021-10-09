import component from "../../Packages/component.js";

export default class extends component {
    constructor() {
        super();
    }

    async getHtml(){
        return `
            <div class="hello">
                <img src="./static/assets/img/image.png">
            </div>
        `;
    }
}