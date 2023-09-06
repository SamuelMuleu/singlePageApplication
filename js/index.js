import { Router } from "./router.js";

const router = new Router();
router.addRoute("/home.html", "/pages/home.html");
router.addRoute("/universe.html", "/pages/universe.html");
router.addRoute("/exploration.html", "/pages/exploration.html");

router.addImage("/home.html", "/assets/mountains-universe.png");
router.addImage("/universe.html", "/assets/mountains-universe02.png");
router.addImage("/exploration.html", "/assets/mountains-universe-3.png");

window.route = () => router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
