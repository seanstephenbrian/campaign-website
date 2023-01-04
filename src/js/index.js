import '../style.css';
import htmlBody from '../html/index.html';

import renderMenu from './menu';

(function renderBody() {
    const body = document.querySelector('body');
    body.innerHTML = htmlBody;
})();

(function fillFooter() {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `
        <p>© ${date.getFullYear()} John Martin for District 65 Board of Education</p>
        <p>All rights reserved.</p>
    `;
})();

(function addInitialClickListeners() {
    // add click listener to fb icon:
    const fbIcon = document.querySelector('.fb-icon-container');
    fbIcon.addEventListener('click', sendToFacebook);
    // add click listener to 'Menu' text & hamburger icon:
    const menuText = document.querySelector('.menu-text');
    const burger = document.querySelector('.hamburger-img');
    menuText.addEventListener('click', renderMenu);
    burger.addEventListener('click', renderMenu);
        renderMenu();
})();

function sendToFacebook() {
    window.open('https://www.facebook.com/people/John-Martin-for-District-65-Board-of-Education/100088939831896/', '_blank');
}