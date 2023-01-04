import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";

const renderIssues = () => {
    updateCurrentPage('issues');
    closeMenu();
}

export default renderIssues;