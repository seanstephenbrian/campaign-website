import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import aboutMain from '../html/about.html';

const renderAbout = () => {
    updateCurrentPage('about');
    closeMenu();
    
    const main = document.querySelector('main');
    main.innerHTML = aboutMain;
}

export default renderAbout;