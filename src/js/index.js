import '../style.css';
import htmlBody from '../html/index.html';

import { 
    renderMenu,
    checkForMobileMenu } from './menu';
import renderHome from './home';
import renderAbout from './about';
import renderIssues from './issues';
import { renderGetInvolved } from './get-involved';
import renderVoting from './voting';

(function renderBody() {
    const body = document.querySelector('body');
    body.innerHTML = htmlBody;
})();

(function fillFooter() {
    const footer = document.querySelector('.copyright');
    const date = new Date();
    footer.innerHTML = `
        <p>© ${date.getFullYear()} John Martin for District 65 Board of Education</p>
        <p>All rights reserved.</p>
        <p>Site design by <span class="ssbbd">ssbbd</span></p>
    `;
    // add click listener to contact web designer:
    const ssbbd = document.querySelector('.ssbbd');
    ssbbd.addEventListener('click', sendToSsbbd);
})();

(function addHeaderClickListeners() {

    // add click listener to fb icon:
    const fbIcon = document.querySelector('.fb-icon-container');
    fbIcon.addEventListener('click', sendToFacebook);

    // add click listeners to menu tabs:
    const homeTab = document.querySelector('.home-tab');
    homeTab.addEventListener('click', renderHome);

    const aboutTab = document.querySelector('.about-tab');
    aboutTab.addEventListener('click', renderAbout);

    const issuesTab = document.querySelector('.issues-tab');
    issuesTab.addEventListener('click', renderIssues);

    const getInvolvedTab = document.querySelector('.get-involved-tab');
    getInvolvedTab.addEventListener('click', renderGetInvolved);

    const votingTab = document.querySelector('.voting-tab');
    votingTab.addEventListener('click', renderVoting);

    // renderHome if user clicks the yard sign logo:
    const logo = document.querySelector('.logo-img');
    logo.addEventListener('click', renderHome);

    // add click listener to 'Menu' text & hamburger icon:
    const menuText = document.querySelector('.menu-text');
    const burger = document.querySelector('.hamburger-img');
    menuText.addEventListener('click', renderMenu);
    burger.addEventListener('click', renderMenu);

})();

renderHome();

window.addEventListener('resize', checkForMobileMenu);

function sendToFacebook() {
    window.open('https://www.facebook.com/people/John-Martin-for-District-65-Board-of-Education/100088939831896/', '_blank');
}

function sendToSsbbd() {
    
}