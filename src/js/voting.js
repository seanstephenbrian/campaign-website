import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import votingMain from '../html/voting.html';

const renderVoting = (clickedBack) => {
    updateCurrentPage('voting', clickedBack);
    closeMenu();

    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = votingMain;
    main.className = 'voting-main';

}

export default renderVoting;