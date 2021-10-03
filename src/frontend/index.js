const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log('home page ') },
        { path: "/posts", view: () => console.log('posts page ') },
        { path: "/settings", view: () => console.log('settings page ') },
    ];

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

    console.log(match.route.view());
};

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches('[data-link]')){
            e.preventDefault();
            NavigateTo(e.target.href);
        }
    });

    router();
});