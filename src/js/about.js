import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import aboutMain from '../html/about.html';

const renderAbout = (clickedBack) => {
    updateCurrentPage('about', clickedBack);
    closeMenu();
    
    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = aboutMain;
    main.className = 'about-main';
}

export default renderAbout;