import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import getInvolvedMain from '../html/get-involved.html';

const renderGetInvolved = () => {
    updateCurrentPage('get-involved');
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = getInvolvedMain;

    // add an event listener to resize the iframe form:
    window.addEventListener('resize', resizeForm);

    resizeForm();
}

function resizeForm() {
    const form = document.querySelector('.embedded-form');

    if (window.innerWidth < 400) {
        form.width = '350';
    } else if (window.innerWidth >= 400 && window.innerWidth < 500) {
        form.width = '400';
    } else if (window.innerWidth >= 500 && window.innerWidth < 600) {
        form.width = '500';
    } else if (window.innerWidth >= 600 && window.innerWidth < 700) {
        form.width = '600';
    } else if (window.innerWidth >= 700 && window.innerWidth < 800) {
        form.width = '700';
    } else if (window.innerWidth >= 800 && window.innerWidth < 900) {
        form.width = '800';
    } else if (window.innerWidth >= 900 && window.innerWidth < 1000) {
        form.width = '900';
    } else if (window.innerWidth >= 1000) {
        form.width = '1000';
    }
}

export default renderGetInvolved;