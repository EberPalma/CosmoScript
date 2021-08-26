export class Router{

    constructor(paths){
        this.paths = paths;
    }

    initRouter(template){
        const {
            location: {
                pathname = "/"
            }
        } = window;
        this.load(this.paths[template]);
    }

    load(template) {
        const PATH = template.path;
        const TEMPLATE = template.template;
        this.render(TEMPLATE);
        window.history.pushState({}, "Genial", PATH);
    }

    render(template){
        (async () => {
            let view = await fetch(template);
            let text = await view.text();
            let importArea = document.querySelector("imported").innerHTML;
            importArea = text;
            document.querySelector("imported").innerHTML= importArea;
            console.log(text);
        })();
    }
}