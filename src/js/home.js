import homeMain from '../html/home.html';
import updateCurrentPage from './current-page';

const renderHome = () => {
    updateCurrentPage('home');
    const main = document.querySelector('main');
    main.innerHTML = homeMain;
}

export default renderHome;