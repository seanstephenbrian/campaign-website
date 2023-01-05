import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import getInvolvedMain from '../html/get-involved.html';

const renderGetInvolved = () => {
    updateCurrentPage('get-involved');
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = getInvolvedMain;
}

export default renderGetInvolved;