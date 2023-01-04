import homeMain from '../html/home.html';
import updateCurrentPage from './current-page';
import { closeMenu } from "./menu";

const renderHome = () => {
    updateCurrentPage('home');
    closeMenu();
    
    const main = document.querySelector('main');
    main.innerHTML = homeMain;
}

export default renderHome;