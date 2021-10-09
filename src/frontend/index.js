import  Routes  from "./routes.js";
import Assets from "./assets/index.js";

const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    // get routes
    const routes = await new Routes().getRoutes();
    // get assets Fills
    const assets = await new Assets().getAssets();

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route : route,
            isMatche: location.pathname === route.path
        };
    });

    let match = potentialMatches.find( potentialMatche => potentialMatche.isMatche);
    if(!match){
        match = {
            route : routes[0],
            isMatche : true
        }
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[z-link]')){
            e.preventDefault();
            NavigateTo(e.target.href);
        }
    });

    router();
});