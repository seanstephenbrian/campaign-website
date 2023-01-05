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

export default renderGetInvolved;