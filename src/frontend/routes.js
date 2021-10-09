import Home from "./views/Home.js";
import About from "./views/About.js";

export default class Routes {
    routes = [
        { path: "/", view: Home },
        { path: "/about", view: About },
    ]

    getRoutes(){
        return this.routes;
    }

}
