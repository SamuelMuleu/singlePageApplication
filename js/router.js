export  class Router {
  routes = {};

  addRoute(routeName, page) {
    this.routes[routeName] = page;
  }
  imagens = {};
  addImage(imageName, link) {
    this.imagens[imageName] = link;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault(); //serve para o evento nao fazer o padrao

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }
  handle() {
    const { pathname } = window.location;

    const route = this.routes[pathname] || this.routes["/pages/404.html"];
    const backgroundImageUrl = this.imagens[pathname] || this.imagens["/pages/home.html"];

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      });
  }
}


