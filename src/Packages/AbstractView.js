export default class {
    constructor() {
        this.desactiverLink();
    }

    desactiverLink(){
        let links = document.querySelectorAll("[z-link]")
        links.forEach(link => {
            link.classList.remove('active')
        });
    }

    activateLink(tag){
        let _tag = `[z-link='${tag}']`;
        let links = document.querySelectorAll(_tag);
        links.forEach(link => {
            link.setAttribute("class", "active");
        });

    }
    setTitle(title){
        document.title = title;
    }

    async getHtml(){
        return "";
    }
}