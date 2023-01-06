import updateCurrentPage from "./current-page";
import { closeMenu } from "./menu";
import issuesMain from '../html/issues.html';

const renderIssues = (clickedBack) => {
    updateCurrentPage('issues', clickedBack);
    closeMenu();

    const prevMain = document.querySelector('main');
    const main = document.createElement('main');
    prevMain.after(main);
    prevMain.remove();
    main.innerHTML = issuesMain;
    main.className = 'issues-main';

    function enableExpandCollapse(section) {
        const sectionDropdown = document.querySelector(`.${section}-issue-dropdown`);
        const learnMore = document.querySelector(`.${section}-learn-more`);

        // add click listeners to expand the sections:
        learnMore.addEventListener('click', () => {
            // reveal the dropdown content:
            sectionDropdown.classList.remove('hide');
            // remove the 'click here' text:
            learnMore.classList.add('hide');
        });

        // add a listener to collapse the section:
        const sectionCollapse = document.querySelector(`.${section}-collapse-icon`);
        sectionCollapse.addEventListener('click', () => {
            // hide the dropdown content:
            sectionDropdown.classList.add('hide');
            // show the 'click here' text:
            learnMore.classList.remove('hide');
        });
    }

    enableExpandCollapse('first');
    enableExpandCollapse('second');
    enableExpandCollapse('third');
    
}

export default renderIssues;