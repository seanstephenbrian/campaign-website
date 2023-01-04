import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";

const renderContribute = () => {
    updateCurrentPage('contribute');
    closeMenu();
}

export default renderContribute;