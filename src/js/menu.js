import menuHtml from '../html/menu.html';
import renderHome from './home';
import renderAbout from './about';
import renderIssues from './issues';
import { renderGetInvolved } from './get-involved';
import renderVoting from './voting';

import CloseIcon from '../img/close.svg';
import HamburgerIcon from '../img/hamburger.svg';
import renderContact from './contact';
import renderSupporters from './supporters';

const renderMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('mobile-menu');
    menu.innerHTML = menuHtml;
    document.body.appendChild(menu);

    // reveal blur overlay:
    const blur = document.querySelector('.blur-overlay');
    blur.classList.remove('hide');

    // remove renderMenu click listeners from menu text & hamburger icon:
    const menuText = document.querySelector('.menu-text');
    menuText.removeEventListener('click', renderMenu);
    const burger = document.querySelector('.hamburger-img');
    burger.removeEventListener('click', renderMenu);

    // change menu text & hamburger icon to CLOSE menu text & icon:
    menuText.textContent = 'Close';
    burger.src = CloseIcon;

    // add closeMenu event listener to menu text & close icon:
    menuText.addEventListener('click', closeMenu);
    burger.addEventListener('click', closeMenu);

    // highlight the current page selection:
    const currentPage = localStorage.getItem('currentPage');
    const currentPageLink = document.querySelector(`.${currentPage}-link`);
    currentPageLink.classList.add('selected-nav');

    // add click listeners to the various page links:
    const homeLink = document.querySelector('.home-link');
    homeLink.addEventListener('click', renderHome);

    const aboutLink = document.querySelector('.about-link');
    aboutLink.addEventListener('click', renderAbout);

    const issuesLink = document.querySelector('.issues-link');
    issuesLink.addEventListener('click', renderIssues);

    const getInvolvedLink = document.querySelector('.get-involved-link');
    getInvolvedLink.addEventListener('click', renderGetInvolved);

    const votingLink = document.querySelector('.voting-link');
    votingLink.addEventListener('click', renderVoting);

    const supportersLink = document.querySelector('.supporters-link');
    supportersLink.addEventListener('click', renderSupporters);

    const contactLink = document.querySelector('.contact-link');
    contactLink.addEventListener('click', renderContact);
}

function closeMenu() {
    // remove the menu:
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.remove();

        // restore 'Menu' text and hamburger icon:
        const menuText = document.querySelector('.menu-text');
        menuText.textContent = 'Menu';
        const burger = document.querySelector('.hamburger-img');
        burger.src = HamburgerIcon;

        // restore click listeners to render the menu:
        menuText.addEventListener('click', renderMenu);
        burger.addEventListener('click', renderMenu);
    }

    // remove the blur overlay:
    const blur = document.querySelector('.blur-overlay');
    blur.classList.add('hide');
}

function checkForMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu && window.innerWidth >= 1000) {
        closeMenu();
    }
}

export {
    renderMenu,
    closeMenu,
    checkForMobileMenu
}