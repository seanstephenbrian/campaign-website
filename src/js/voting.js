import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import votingMain from '../html/voting.html';

const renderVoting = (clickedBack) => {
    updateCurrentPage('voting', clickedBack);
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = votingMain;
    main.className = '';
    main.className = 'voting-main';

}

export default renderVoting;