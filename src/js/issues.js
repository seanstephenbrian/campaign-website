import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import issuesMain from '../html/issues.html';

const renderIssues = () => {
    updateCurrentPage('issues');
    closeMenu();

    const main = document.querySelector('main');
    main.innerHTML = issuesMain;
}

export default renderIssues;