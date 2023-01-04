import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";

const renderVoting = () => {
    updateCurrentPage('voting');
    closeMenu();
}

export default renderVoting;