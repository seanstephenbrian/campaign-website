import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import votingMain from '../html/voting.html';

const renderVoting = () => {
    updateCurrentPage('voting');
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = votingMain;

}

export default renderVoting;