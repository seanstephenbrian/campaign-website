import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";

const renderAbout = () => {
    updateCurrentPage('about');
    closeMenu();
}

export default renderAbout;