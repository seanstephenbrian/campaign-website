import updateCurrentPage from './current-page';
import { closeMenu } from './menu';
import contactMain from '../html/contact.html';

const renderContact = (clickedBack) => {
    updateCurrentPage('contact', clickedBack);
    closeMenu();

    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = contactMain;
    main.className = 'contact-main';
}

export default renderContact;