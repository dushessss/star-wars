import {characters} from "./characters.jsx";


export const navItems = [{
    title: "Home",
    route: "home"
}, {
    title: "About Me",
    route: "aboutMe"
}, {
    title: "Star Wars",
    route: "starWars"
}, {
    title: "Contact",
    route: "contact"
}];

export const defaultHero = Object.keys(characters)[0];

export const base_url = 'https://sw-info-api.herokuapp.com';

export const period_month = 1000 * 60 * 60 * 24 * 30;

export const period = 1000 * 60 * 60 * 24 * 20;