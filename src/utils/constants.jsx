import {characters} from "./characters.jsx";


export const navItems = [{
    title: "Home",
    route: "/star-wars/home"
}, {
    title: "About Me",
    route: "/star-wars/aboutMe"
}, {
    title: "Star Wars",
    route: "/star-wars/starWars"
}, {
    title: "Contact",
    route: "/star-wars/contact"
}];

export const defaultHero = Object.keys(characters)[0];

export const base_url = 'https://sw-info-api.herokuapp.com';

export const period_month = 1000 * 60 * 60 * 24 * 30;

export const period = 1000 * 60 * 60 * 24 * 20;