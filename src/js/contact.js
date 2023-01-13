import updateCurrentPage from './current-page';
import { closeMenu } from './menu';
import contactMain from '../html/contact.html';
import { renderGetInvolved } from './get-involved';

const renderContact = (clickedBack) => {
    updateCurrentPage('contact', clickedBack);
    closeMenu();

    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = contactMain;
    main.className = 'contact-main';

    // add click listener to get involved button
    const getInvolvedButton = document.querySelector('.get-involved-button');
    getInvolvedButton.addEventListener('click', renderGetInvolved);
}

export default renderContact;