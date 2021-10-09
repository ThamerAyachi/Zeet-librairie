export default class assets {
    // fills name 
    assets = [
        { name: "main.css", type: "css"}
    ];


    // This function for write all assets fills in html fill
    async getAssets(){
        this.assets.forEach(fill => {
            // for css fill
            if (fill.type == "css") {
                let link = document.createElement('link');
                link.rel = "stylesheet";
                link.href = `./static/assets/${fill.name}`;
                document.getElementsByTagName('head')[0].appendChild(link);
            }
            // for js fill
            else if (fill.type == "js"){
                let script = document.createElement('script');
                script.type = "module";
                script.src = `./static/assets/${fill.name}`;
                document.getElementsByTagName('body').appendChild(script);
            }
        });
    }

}

