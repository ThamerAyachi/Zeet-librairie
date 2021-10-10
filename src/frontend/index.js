import  Routes  from "./routes.js";
import Assets from "./assets/index.js";
import app from "./app.js";

const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// get assets Fills
await new Assets().getAssets();

const router = async () => {

    // get routes
    const routes = await new Routes().getRoutes();

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

    // Add getHtml() function in app.js
    const view = new match.route.view();
    let RouterLink = new app();
    RouterLink.routerLink = await view.getHtml();


    document.querySelector("#app").innerHTML = await RouterLink.getHtml();

    // for update class "active"
    const _view = new match.route.view();
    

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