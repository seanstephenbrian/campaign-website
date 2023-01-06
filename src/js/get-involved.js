import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import getInvolvedMain from '../html/get-involved.html';
import sendToDonate from "./donate";

const renderGetInvolved = (clickedBack) => {
    updateCurrentPage('get-involved', clickedBack);
    closeMenu();

    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = getInvolvedMain;
    main.className = 'get-involved-main';

    // add click listener to donate button;
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('click', sendToDonate);

    // add an event listener to resize the iframe form:
    window.addEventListener('resize', resizeForm);

    resizeForm();

    let justRendered = true;

    const form = document.querySelector('.embedded-form');
    form.addEventListener('load', () => {
        if (justRendered === false) {
            form.remove();
            window.removeEventListener('resize', resizeForm);
            const text = document.querySelector('.connect-text');
            text.textContent = 'Your response has been recorded. Thanks!';
        } else {
            justRendered = false;
        }
    })
}

function resizeForm() {
    const form = document.querySelector('.embedded-form');

    if (window.innerWidth < 400) {
        form.width = '350';
    } else if (window.innerWidth >= 400 && window.innerWidth < 500) {
        form.width = '400';
    } else if (window.innerWidth >= 500 && window.innerWidth < 600) {
        form.width = '500';
    } else if (window.innerWidth >= 600) {
        form.width = '640';
    }
}

export {
    renderGetInvolved,
    resizeForm
};