export default class {
    constructor() {
    }

    routerLink = "" ;

    

    async getHtml(){
        return `

    <ul class="nav">
        <li><a href="/" z-link="" >Home</a></li>
        <li><a href="/about" z-link="about">About</a></li>
    </ul>
        
            ${await this.routerLink}
        `;
    }
}