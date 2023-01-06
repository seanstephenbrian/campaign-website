import { resizeForm } from "./get-involved";
import updatePageState from "./page-state";

const updateCurrentPage = (page, clickedBack) => {
    // save currentPage to localStorage:
    localStorage.setItem('currentPage', page);
    if (page !== 'get-involved') {
        window.removeEventListener('resize', resizeForm);
    }
    // update search params & window history:
    updatePageState(page, clickedBack);
    // first clear the selected-nav class from all tabs:
    const navTabs = document.querySelectorAll('.nav-link');
    navTabs.forEach(tab => {
        tab.classList.remove('selected-nav');
    });
    // then apply the selected-nav class to the current page tab:
    const currentTab = document.querySelector(`.${page}-tab`);
    currentTab.classList.add('selected-nav');
}

export default updateCurrentPage;